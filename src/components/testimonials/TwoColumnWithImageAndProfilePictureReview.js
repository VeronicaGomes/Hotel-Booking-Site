import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { PrimaryButton } from "../misc/Buttons.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative -mt-16 mb-6`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const TestimonialsContainer = tw.div`mt-16 lg:mt-0`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-5/12 flex-shrink-0 `;
const TestimonialTextSlider = tw(Slider)``;
const TestimonialText = tw.div`outline-none`;

const ImageAndControlContainer = tw.div`relative outline-none`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-80 sm:h-96 lg:h-144 shadow-md`
]);

const ControlContainer = tw.div`flex items-center  lg:ml-240 lg:mb-10 sm:ml-144 sm:-mb-8`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 bg-steelblue-900 hover:bg-steelblue-500 rounded-full p-2 shadow-md`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const TextContainer = styled.div(props => [
  tw`flex flex-col w-full lg:w-7/12`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`
]);

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`lg:text-left font-normal sm:pb-12 leading-tight`;
const QuoteContainer = tw.div`relative mt-20`;
const Quote = tw.blockquote`text-center -mt-10 lg:text-left text-secondary-100 text-sm sm:text-lg lg:text-xl xl:text-2xl`;
const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row sm:pt-6 items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20`;
const CustomerTextInfo = tw.div`text-center lg:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-medium text-xl lg:text-2xl xl:text-3xl text-secondary-500`;
const CustomerTitle = tw.p`font-medium text-secondary-100`;

const QuotesLeft = tw(QuotesLeftIcon)`w-6 h-6 opacity-75 text-secondary-500 inline-block mr-1 -mt-3`;
const QuotesRight = tw(QuotesRightIcon)`w-6 h-6 opacity-75 text-steelblue-500 inline-block ml-1 -mt-3`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default ({
  subheading = "",
  heading = "What our Customers are saying..",
  description = "Here are what some of our amazing customers are saying about our hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  testimonials = null,
  textOnLeft = false,
}) => {
  /*
   * You can modify the testimonials shown by modifying the array below or passing in the testimonials prop above
   * You can add or remove objects from the array as you need.
   */
  const defaultTestimonials = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      profileImageSrc:
        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote:
        "Excellent value for money holiday. My questions were all answered promptly and when my consultant was unavailable, another staff member would respond on their behalf so that i wasn't kept waiting. I would definitely book through Travelonline again!",
      customerName: "Cassy Stark",
      customerTitle: "CEO, Delos Inc.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1531698451051-18c97580aeb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      profileImageSrc:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      quote:
        "Tranquil Travels have some amazing deals and it was so easy to book and use the service. Everything was looked after for me and took away the worry and stress of booking things. I will highly recommend this service to family and friends and I will be using them again.",
      customerName: "Alex Timson",
      customerTitle: "Founder, EventsNYC",
    },
  ];

  if (!testimonials || testimonials.length === 0)
    testimonials = defaultTestimonials;

  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  return (
    <Container id="review">
      <Content>
        <HeadingInfo
          tw="text-center lg:hidden"
          subheading={subheading}
          heading={heading}
          description={description}
        />
        <ControlContainer>
          <ControlButton onClick={imageSliderRef?.slickPrev}>
            <ChevronLeftIcon />
          </ControlButton>
          <ControlButton onClick={imageSliderRef?.slickNext}>
            <ChevronRightIcon />
          </ControlButton>
        </ControlContainer>
        <TestimonialsContainer>
          <Testimonials>
            <Testimonial>
              <TestimonialImageSlider
                arrows={false}
                ref={setImageSliderRef}
                asNavFor={textSliderRef}
                fade={true}
              >
                {testimonials.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <Image imageSrc={testimonial.imageSrc} />
                  </ImageAndControlContainer>
                ))}
              </TestimonialImageSlider>
              <TextContainer textOnLeft={textOnLeft}>
                <HeadingInfo
                  tw="hidden lg:block"
                  subheading={subheading}
                  heading={heading}
                  description={description}
                />
                <TestimonialTextSlider
                  arrows={false}
                  ref={setTextSliderRef}
                  asNavFor={imageSliderRef}
                  fade={true}
                >
                  {testimonials.map((testimonial, index) => (
                    <TestimonialText key={index}>
                      <QuoteContainer>
                        <Quote>
                          <QuotesLeft />
                          {testimonial.quote}
                          <QuotesRight />
                        </Quote>
                      </QuoteContainer>
                      <CustomerInfo>
                        <CustomerProfilePicture
                          src={testimonial.profileImageSrc}
                          alt={testimonial.customerName}
                        />
                        <CustomerTextInfo>
                          <CustomerName>
                            {testimonial.customerName}
                          </CustomerName>
                          <CustomerTitle>
                            {testimonial.customerTitle}
                          </CustomerTitle>
                        </CustomerTextInfo>
                      </CustomerInfo>
                    </TestimonialText>
                  ))}
                </TestimonialTextSlider>
              </TextContainer>
            </Testimonial>
          </Testimonials>
        </TestimonialsContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div {...props}>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>
      <em>{heading}</em>
    </HeadingTitle>
    {/* <Description>{description}</Description> */}
  </div>
);
