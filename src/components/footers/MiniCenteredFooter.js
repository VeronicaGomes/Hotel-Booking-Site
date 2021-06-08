import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoLink = tw.div`flex items-center justify-center md:justify-start`;
const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-peach-300 hocus:border-peach-300 pb-1 transition duration-300 mt-2 mx-4`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-peach-300 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoLink>
            {/* <LogoImg src={logo} /> */}
            <LogoContainer>Tranquil Travels</LogoContainer>
          </LogoLink>
          <LinksContainer>
            <AnchorLink href="#hotel">
              <Link> Hotels</Link>
            </AnchorLink>
            <AnchorLink href="#about">
              <Link>About</Link>
            </AnchorLink>
            <AnchorLink href="#blog">
              <Link>Blog</Link>
            </AnchorLink>
            <AnchorLink href="#review">
              <Link>Reviews</Link>
            </AnchorLink>

            <Link href="#">Contact Us</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            Copyright {new Date().getFullYear()} All right reserved
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
