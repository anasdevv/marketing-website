import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
//eslint-disable-next-line
import { css } from 'styled-components/macro';
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import { SectionDescription } from 'components/misc/Typography.js';
import { GiWaxSeal } from 'react-icons/gi';

import { GiSandstorm } from 'react-icons/gi';
import { GiIceCreamScoop } from 'react-icons/gi';

import defaultCardImage from 'images/shield-icon.svg';
import { MdOutlineCleanHands, MdOutlinePets } from 'react-icons/md';

import { ReactComponent as SvgDecoratorBlob3 } from 'images/svg-decorator-blob-3.svg';
import { PiEngine } from 'react-icons/pi';

import SupportIconImage from 'images/support-icon.svg';
import ShieldIconImage from 'images/shield-icon.svg';
import CustomizeIconImage from 'images/customize-icon.svg';
import FastIconImage from 'images/fast-icon.svg';
import ReliableIconImage from 'images/reliable-icon.svg';
import SimpleIconImage from 'images/simple-icon.svg';

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;
const Svg = tw.div`text-icons text-xl`;
const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = 'Amazing Features' }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultServices = [
    {
      svg: <MdOutlineCleanHands className='text-icon' text-2xl />,
      title: 'Shampoo',
      description:
        'Revitalize your seats and carpets with our rejuvenating shampoo. $50 for shampooing seats OR carpets.',
      price: 50,
    },
    {
      svg: <MdOutlinePets className='text-icon text-2xl' />,
      title: 'Pet Hair',
      description:
        'Say goodbye to pet hair nightmares. Our experts will remove it for $30-$40.',
      price: 30, // You can set a base price or a price range.
    },
    {
      svg: <GiWaxSeal className='text-icon text-2xl' />,
      title: 'Wax',
      description:
        'Give your car the glossy finish it deserves with our premium waxing service. $40 for a dazzling shine.',
      price: 40,
    },
    {
      svg: <PiEngine className='text-icon text-2xl' />,
      title: 'Engine',
      description: `Treat your car's heart to a spa day. Engine bay cleaning for a smooth running vehicle.`,
      price: 40,
    },
    {
      svg: <GiSandstorm className='text-icon text-2xl' />,
      title: 'Severe Dirtiness',
      description:
        'Experience swift and efficient detailing services to get you back on the road.',
      price: 30,
    },
    {
      svg: <GiIceCreamScoop className='text-icon text-2xl' />,
      title: 'Ceramic Coating',
      description: `Enhance your car's protection with our Ceramic Coating. Ask about our special packages.`,
      price: null, // You can leave it as null if the price varies based on the package.
    },
  ];

  if (!cards) cards = defaultServices;

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>{heading}</Heading>
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className='imageContainer'>
                <Svg>{card.svg}</Svg>
              </span>
              <span className='textContainer'>
                <span className='title'>{card.title || 'Fully Secure'}</span>
                <p className='description'>
                  {card.description ||
                    'Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.'}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
