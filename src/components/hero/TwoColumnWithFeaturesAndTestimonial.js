import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import HeaderBase, {
  NavLinks,
  NavLink,
  PrimaryLink,
} from 'components/headers/light.js';
import {
  Container as ContainerBase,
  ContentWithPaddingXl,
} from 'components/misc/Layouts';
import { SectionHeading } from 'components/misc/Headings.js';
import { SectionDescription } from 'components/misc/Typography.js';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';
import {
  Container,
  ContentWithVerticalPadding,
} from 'components/misc/Layouts.js';
import { ReactComponent as CheckboxIcon } from 'feather-icons/dist/icons/check-circle.svg';
import { ReactComponent as QuotesLeftIconBase } from 'images/quotes-l.svg';
import { ReactComponent as SvgDecoratorBlob1 } from 'images/dot-pattern.svg';
import Img from '../../images/car-wash.jpg';
const Container2 = tw(
  ContainerBase
)` lg:py-4 py-2 bg-gray-100 text-gray-100 -mx-8 px-8 lg:px-12`;
const Header = tw(HeaderBase)`max-w-none`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(
  Column
)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(
  SectionHeading
)`text-left text-primary-900 leading-snug xl:text-6xl`;
const SHeading = tw(
  SectionHeading
)`text-left text-primary-900 leading-snug xl:text-4xl`;
const Description = tw(
  SectionDescription
)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const Subheading = tw.h5`font-bold text-blue-600 text-2xl`;

const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full w-[52rem] rounded-t sm:rounded relative z-20`;
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`;
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;
const Testimonial = tw.div`bottom-[-10rem] max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-primary-900 text-gray-400 font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`;
const QuotesLeftIcon = tw(
  QuotesLeftIconBase
)`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-red-500 transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`;
const Quote = tw.blockquote``;
const CustomerName = tw.p`mt-4 font-bold`;
const CustomerCompany = tw.p`mt-1 text-sm text-gray-500`;

export default ({
  heading = 'Better, Faster and Cheaper.',
  description = 'At LuxuriousDetailers, we go beyond ordinary car detailing to redefine your driving experience. Our passion for perfection and commitment to excellence set us apart, ensuring your vehicle not only looks immaculate but also feels rejuvenated on the road.',
  imageDecoratorBlob = true,
  buttonRounded = true,
  features = [
    'Serving over 20 cities all over the nation including Orlando FL',
    '  INTERIOR - vacuum seats, carpets, trunk and floor mats, full wipe down all surfaces, dress all plastics, apply leather conditioner, clean interior windows, and air freshener.',
    'EXTERIOR - Foam soap hand wash, pressure washer rinse, clean degrease and dress wheels, tires and rims, clean all door jabs and trunk sealants, microfiber cloth dry.    ',
  ],
  testimonial = {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    customerName: 'Charlotte Hale',
    customerCompany: 'Delos Inc.',
  },
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href='/#'>About</NavLink>
      <NavLink href='/#'>Pricing</NavLink>
      <NavLink href='/#'>Contact Us</NavLink>
      <NavLink href='/#'>Testimonials</NavLink>
    </NavLinks>,
  ];

  return (
    <>
      <Header links={navLinks} />
      <Container>
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Heading>
                {'Introducing LuxuriousDetailers - Elevate Your Ride'}
              </Heading>
              <Subheading>{heading}</Subheading>
              <Description>{description}</Description>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={Img} />
                {imageDecoratorBlob && <ImageDecoratorBlob />}
                {/* <Testimonial>
                  <QuotesLeftIcon />
                  <Quote>{testimonial.quote}</Quote>
                  <CustomerName>{testimonial.customerName}</CustomerName>
                  <CustomerCompany>
                    {testimonial.customerCompany}
                  </CustomerCompany>
                </Testimonial> */}
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </>
  );
};
