import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import config from '../website-config';
import { Twitter } from '../components/icons/twitter';
import { Github } from '../components/icons/github';
import { Linkedin } from '../components/icons/linkedin';
import { Footer } from '../components/Footer';
import ContactForm from '../components/ContactForm';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { SocialLinkLarge } from '../styles/shared';
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

const Contact: React.FC = () => (
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
              <PostFullTitle className="post-full-title">Contact</PostFullTitle>
            </PostFullHeader>
            <PostFullContent className="post-full-content">
              <div style={{textAlign: 'center'}}>
                <p>
                  Reach out and I will respond as soon as I can!
                </p>
              </div>
              <div className="post-content">
                <section id="contactUs" className="main special">
                  <header className="major">
                    <ContactForm></ContactForm>
                  </header>
                </section>
              </div>
            </PostFullContent>
          </article>
          <SocialLinks>
              {config.github && (
                <a
                  css={SocialLinkLarge}
                  href={config.github}
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
              )}
              {config.linkedin && (
                <a
                  css={SocialLinkLarge}
                  href={config.linkedin}
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
              )}
              {config.twitter && (
                <a
                  css={SocialLinkLarge}
                  href={config.twitter}
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
              )}
            </SocialLinks>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

const SocialLinks = styled.div`
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export default Contact;
