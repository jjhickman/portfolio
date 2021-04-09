import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';
import config from '../config';

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


const PostFullImage = styled.figure`
  margin: 25px 0 50px;
  max-width: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background: ${colors.whitegrey} center center;
  background-size: cover;
  border-radius: 5px;

  @media (max-width: 1170px) {
    margin: 25px -6vw 50px;
    border-radius: 0;
    img {
      max-width: 1170px;
    }
  }

  @media (max-width: 800px) {
    height: 400px;
  }
  @media (max-width: 500px) {
    margin-bottom: 4vw;
    height: 350px;
  }
`;

interface AboutProfileProps {
  about?: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

const About: React.FC = () => (
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
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>
            <StaticQuery
              query={graphql`
                query ProfileQuery {
                  about: file(relativePath: { eq: "img/guitar.jpg" }) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={(data: AboutProfileProps) => (
              <>
                {data.about ? (
                  <PostFullImage>
                    <Img
                      fluid={data.about.childImageSharp.fluid}
                      fadeIn={true}
                    />
                  </PostFullImage>
                ) : (
                  "Profile Picture"
                )}
              </>
              )}
            />
            <PostFullContent className="post-full-content">
              <div className="post-content">
                <p>
                  I am a software engineer and solutions architect specialized in distributed real-time control systems, cloud computing, and industrial automation. I also have experience in computer vision and machine learning.
                </p>
                <hr style={{border: '3px solid white'}}/>
                {config.experience && (
                  <div>
                  <h5>Experience</h5>
                  {config.experience.map((job, i) => {
                    return(
                      <div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                          <div style={{flex: '1'}}>
                            <h6 style={{textAlign: 'left'}}>{job.title}</h6>
                          </div>
                          <div style={{flex: '1'}}>
                            <h6 style={{textAlign: 'right'}}>{job.company}</h6>
                          </div>
                        </div>
                        <p>
                          <em>{job.duration}</em>
                        </p>
                        <ul>
                          {job.items && job.items.map((item, index) => {
                            return (
                              <li key={index}>{item}</li>
                            )
                          })}
                        </ul>
                        {(i < config.experience.length - 1) && (
                          <div>
                            <hr style={{border: `1px solid ${colors.blue}`}}/>
                          </div>
                        )}
                        {(i === config.experience.length - 1) && (
                          <div>
                            &nbsp;
                          </div>
                        )}
                      </div>
                    )
                  })}
                  </div>
                )}
                <hr style={{border: '3px solid white'}}/>
                {config.certifications && (
                  <div>
                  <h5>Certifications &amp; Awards</h5>
                  {config.certifications.map((award, index) => {
                    return(
                      <div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                          <div style={{flex: '1'}}>
                            <h6 style={{textAlign: 'left'}}>{award.title}</h6>
                          </div>
                          <div style={{flex: '1'}}>
                            <h6 style={{textAlign: 'right'}}>{award.authority}</h6>
                          </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                          <div style={{flex: '1'}}>
                        <p style={{textAlign: 'left'}}>
                          <em>{award.duration}</em>
                        </p>
                      </div>
                      <div style={{flex: '1'}}>
                        <p style={{textAlign: 'right'}}>{'ID: ' + award.id}</p>
                      </div>
                        </div>
                        {(index < config.certifications.length - 1) && (
                          <div>
                            <hr style={{border: `1px solid ${colors.blue}`}}/>
                          </div>
                        )}
                        {(index === config.certifications.length - 1) && (
                          <div>
                            &nbsp;
                          </div>
                        )}
                      </div>
                    )
                  })}
                  </div>
                )}
                <hr style={{border: '3px solid white'}}/>
                {config.education && (
                  <div>
                  <h5>Education</h5>
                  {config.education.map((school, index) => {
                    return(
                      <div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                          <div style={{flex: '1'}}>
                            <h6 style={{textAlign: 'left'}}>{school.title}</h6>
                          </div>
                          <div style={{flex: '1'}}>
                            <h6 style={{textAlign: 'right'}}>{school.school}</h6>
                          </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                          <div style={{flex: '1'}}>
                        <p style={{textAlign: 'left'}}>
                          <em>{school.duration}</em>
                        </p>
                      </div>
                      <div style={{flex: '1'}}>
                        <p style={{textAlign: 'right'}}>{'GPA: ' + school.gpa}</p>
                      </div>
                        </div>
                        {(index < config.education.length - 1) && (
                          <div>
                            <hr style={{border: `1px solid ${colors.blue}`}}/>
                          </div>
                        )}
                        {(index === config.education.length - 1) && (
                          <div>
                            &nbsp;
                          </div>
                        )}
                      </div>
                    )
                  })}
                  </div>
                )}
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
