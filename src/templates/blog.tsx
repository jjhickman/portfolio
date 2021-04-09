import React from 'react';
import { graphql} from 'gatsby';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { Wrapper } from '../components/Wrapper';
import { PostCard } from '../components/PostCard';
import Pagination from '../components/Pagination';
import IndexLayout from '../layouts';
import { PageContext } from './project';

import {
  inner,
  outer,
  PostFeed,
  Posts,
  SiteHeader,
  SiteMain,
  SiteArchiveHeader,
  SiteNavMain,
} from '../styles/shared';
import { colors } from '../styles/colors';
import { FixedObject } from 'gatsby-image';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;


export interface BlogProps {
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    logo: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    header: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    allMarkdownRemark: {
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

const Blog: React.FC<BlogProps> = props => {
  return(
  <IndexLayout>
    <Helmet>
      <title>Josh Hickman</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={[inner, Posts]}>
            <div css={[PostFeed]}>
              {props.data && props.data.allMarkdownRemark && props.data.allMarkdownRemark.edges.map((post: any, index: number) => {
                // filter out drafts in production
                return (
                  (post.node.frontmatter.draft !== true ||
                    process.env.NODE_ENV !== 'production') && (
                    <PostCard key={post.node.fields.slug} post={post.node} large={index === 0} />
                  )
                );
              })}
            </div>
          </div>
        </main>
        {props.children}
        {props.pageContext.numPages > 1 && (
          <Pagination
            currentPage={props.pageContext.currentPage}
            numPages={props.pageContext.numPages}
          />
        )}
      <Footer />
    </Wrapper>
  </IndexLayout>
  )
};

export default Blog;


export const pageQuery = graphql`
query blogPageQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { draft: { ne: true }, layout: { eq: "post" } } }
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        timeToRead
        frontmatter {
          title
          date
          tags
          draft
          excerpt
          image {
            childImageSharp {
              fluid(maxWidth: 3720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          author {
            id
            bio
            avatar {
              children {
                ... on ImageSharp {
                  fluid(quality: 100, srcSetBreakpoints: [40, 80, 120]) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        excerpt
        fields {
          layout
          slug
        }
      }
    }
  }
}
`;