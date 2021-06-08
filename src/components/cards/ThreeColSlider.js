import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw.em(SectionHeading)`font-normal pl-5`;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(
  ControlButton
)`bg-steelblue-900 shadow-lg hover:bg-steelblue-500`;
const NextButton = tw(
  ControlButton
)`bg-steelblue-900 shadow-lg hover:bg-steelblue-500`;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full  flex! flex-col shadow-lg max-w-sm relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center `
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-auto bg-steelblue-900 sm:text-lg rounded-none w-full py-3 sm:py-6 hover:bg-steelblue-500`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)

  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/15/54/6e/la-perla-villas.jpg?w=900&h=-1&s=1",
      title: "La Perla Villas and Suites",
      description:
        "La Perla Villas and Suites is a cluster of cave houses in the heart of the Caldera, in Oia, offering panoramic views of the seas and the Oia coastline.",
      locationText: "Santorini, Greece",
      pricingText: "USD 39/Day",
      rating: "4.8",
    },
    {
      imageSrc:
        "https://cf.bstatic.com/images/hotel/max1280x900/121/121902263.jpg",
      title: "Hotel Giolli Nazionale",
      description:
        "Hotel Giolli offers large rooms with Wi-Fi access, friendly service, and a 24-hour front desk. It is located on Via Nazionale, a short walk from Roma Termini Railway Station.",
      locationText: "Repubblica, Rome",
      pricingText: "USD 50/Day",
      rating: "4.9",
    },
    {
      imageSrc:
        "https://www.timeoutdubai.com/public/images/2019/09/30/five1.jpg",
      title: "Five Palm Jumeirah Dubai",
      description:
        "FIVE Palm Jumeirah Dubai boasts its own private beach as well as 5 outdoor swimming pools, including a 55m long option, running through the heart of the resort.",
      locationText: "Five Palm Jumeirah, Dubai",
      pricingText: "USD 19/Day",
      rating: "5.0",
    },
    {
      imageSrc:
        "https://cdn.wedding-spot.com/__sized__/images/venues/15336/Occidental-Tamarindo-Provincia-de-Guanacaste--Santa-Cruz-Costa-Rica-27f87866-3f05-4d5b-8cc9-01b6a0175046-97450e389c42885476f1fbe9bc5bca5a.jpg",
      title: "Occidental Tamarindo ALL",
      description:
        "Offering a beautiful setting on Playa Langosta Beach and next to Las Baulas National Park, Occidental Tamarindo features an outdoor swimming pool and spa.",
      locationText: "Tamarindo, Costa Rica",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
  ];

  return (
    <Container id="hotel">
      <Content>
        <HeadingWithControl>
          <Heading>
            {/* Popular Hotels */}
            <em>Popular Hotels</em>
          </Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </PrevButton>
            <NextButton onClick={sliderRef?.slickNext}>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card
              key={index}
            >
              <CardImage
                imageSrc={card.imageSrc}
              />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    <StarIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton>Book Now</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
