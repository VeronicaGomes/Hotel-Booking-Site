import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
  MobileNavLinks,
} from "../headers/light.js";
import AnchorLink from "react-anchor-link-smooth-scroll";
const StyledHeader1 = styled(Header)`
  ${tw`pt-4 pb-4 pl-8 pr-8 max-w-none w-full fixed inset-x-0 bg-transparent`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-bisque-600 hover:text-bisque-600 `}
  }
  ${MobileNavLinks} {
    ${tw`text-gray-200 hover:border-bisque-600 hover:text-bisque-600`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-bisque-600 `}
  }
`;
const StyledHeader2 = styled(Header)`
  ${tw`pt-4 pb-4 pl-8 pr-8 max-w-none w-full fixed inset-x-0 bg-peach-600`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-bisque-600 hover:text-bisque-600`}
  }
  ${MobileNavLinks} {
    ${tw`text-gray-100 hover:border-bisque-600 hover:text-bisque-600`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-bisque-600 transition duration-500`}
  }
`;
const PrimaryLink = tw(PrimaryLinkBase)`rounded-md px-10 bg-peach-400 text-white hover:bg-peach-700 `;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://i.ibb.co/SVWh4Zb/background.png");
`;
// const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-overlay opacity-75`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;
const Heading = styled.h1`
  ${tw`text-3xl text-left sm:text-4xl lg:text-5xl xl:text-6xl font-thin text-gray-100 leading-snug -mt-24 sm:mt-0 `}
  span {
    ${tw`inline-block mt-2 ml-32`}
  }
`;

export default () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 850) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const navLinks = [
    <NavLinks key={1}>
      <AnchorLink href="#hotel">
        <NavLink>Popular Hotel</NavLink>
      </AnchorLink>
      <AnchorLink href="#about">
        <NavLink>About</NavLink>
      </AnchorLink>
      <AnchorLink href="#tour">
        <NavLink>Tour</NavLink>
      </AnchorLink>
      <AnchorLink href="#blog">
        <NavLink>Blog</NavLink>
      </AnchorLink>
      <AnchorLink href="#review">
        <NavLink>Review</NavLink>
      </AnchorLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="#">Book</PrimaryLink>
    </NavLinks>,
  ];
  return (
    <Container id="#">
      
      {/* <OpacityOverlay /> */}
      <HeroContainer>
        {colorChange ? (
          <StyledHeader2 links={navLinks} />
        ) : (
          <StyledHeader1 links={navLinks} />
        )}
        <Content>
          <Heading>
            <em>Enjoy your Holiday</em>
            <br />
            <span>
              in a <em>Perfect Place</em>
            </span>
          </Heading>
        </Content>
      </HeroContainer>
    </Container>
  );
};
