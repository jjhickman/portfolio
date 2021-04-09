/* eslint-disable @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-var-requires */
const path = require('path');
const _ = require('lodash');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.
  // eslint-disable-next-line default-case
  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout, primaryTag } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}/`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      });

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || ''
      });

      createNodeField({
        node,
        name: 'primaryTag',
        value: primaryTag || ''
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: ASC }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            excerpt
            timeToRead
            frontmatter {
              title
              tags
              date
              draft
              excerpt
              image {
                childImageSharp {
                  fluid(maxWidth: 3720) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
              author {
                id
                bio
                avatar {
                  children {
                    ... on ImageSharp {
                      fluid(quality: 100) {
                        aspectRatio
                        base64
                        sizes
                        src
                        srcSet
                      }
                    }
                  }
                }
              }
            }
            fields {
              layout
              slug
            }
          }
        }
      }
      allAuthorYaml {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error(result.errors);
  }

  const publications = result.data.allMarkdownRemark.edges;
  const postsPerPage = 6;
  const numPages = Math.ceil(publications.length / postsPerPage);
  let postsIndex = 0;
  let projectsIndex = 0;

  publications.forEach((publication, i) => {
    const { title, tags } = publication.node.frontmatter;
    const { slug, layout } = publication.node.fields;
    const prev = i === 0 ? null : publications[i - 1].node;
    const next = i === publications.length - 1 ? null : publications[i + 1].node;
    createPage({
      path: i === 0 ? '/' : `/${i + 1}`,
      component: path.resolve('./src/templates/index.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    });

    if (layout === 'post') {
      createPage({
        path: postsIndex === 0 ? '/blog' : `/blog/${postsIndex + 1}`,
        component: path.resolve('./src/templates/blog.tsx'),
        context: {
          limit: postsPerPage,
          skip: postsIndex * postsPerPage,
          numPages,
          currentPage: postsIndex + 1
        }
      });
      postsIndex++;
    } else if (layout === 'project') {
      createPage({
        path: projectsIndex === 0 ? `/portfolio` : `/portfolio/${projectsIndex + 1}`,
        component: path.resolve(`./src/templates/portfolio.tsx`),
        context: {
          limit: postsPerPage,
          skip: projectsIndex * postsPerPage,
          numPages,
          currentPage: projectsIndex + 1
        }
      });
      projectsIndex++;
    } else {
      console.log(`Publication is not a project or blog post: ${layout} - ${title}`);
    }

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || 'post'}.tsx`),
      context: {
        slug,
        prev,
        next,
        primaryTag: tags ? tags[0] : ''
      }
    });
  });

  // Create tag pages
  const tagTemplate = path.resolve('./src/templates/tags.tsx');
  const postTags = _.uniq(
    _.flatten(
      result.data.allMarkdownRemark.edges.map(edge => {
        return _.castArray(_.get(edge, 'node.frontmatter.tags', []));
      })
    )
  );
  postTags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag
      }
    });
  });

  // Create author pages
  const authorTemplate = path.resolve('./src/templates/author.tsx');
  result.data.allAuthorYaml.edges.forEach(edge => {
    createPage({
      path: `/author/${_.kebabCase(edge.node.id)}/`,
      component: authorTemplate,
      context: {
        author: edge.node.id
      }
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // adds sourcemaps for tsx in dev mode
  if (stage === 'develop' || stage === 'develop-html') {
    actions.setWebpackConfig({
      devtool: 'eval-source-map'
    });
  }
};
