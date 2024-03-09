import React from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';

import Hero from 'components/hero/TwoColumnWithFeaturesAndTestimonial.js';
import Features from 'components/features/ThreeColWithSideImage.js';
import MainFeature from 'components/features/TwoColWithTwoHorizontalFeaturesAndButton.js';
import Services from 'components/features/ThreeColServices';
import FeatureStats from 'components/features/ThreeColCenteredStatsPrimaryBackground.js';
import Pricing from 'components/pricing/TwoPlansWithDurationSwitcher.js';
import Blog from 'components/blogs/GridWithFeaturedPost.js';
import Testimonial from 'components/testimonials/TwoColumnWithImageAndRating.js';
import FAQ from 'components/faqs/SingleCol.js';
import GetStarted from 'components/cta/GetStartedLight.js';
import Footer from 'components/footers/FiveColumnWithInputForm.js';
import MainServices from 'components/features/MainServices';

const HighlightedText = tw.span`text-blue-600`;

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <MainServices />
      <FeatureStats />
      <Services
        heading={
          <>
            Additional <HighlightedText>Services</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Amazing <HighlightedText>Features</HighlightedText>
          </>
        }
      />
      <MainFeature />
      <Testimonial
        heading={
          <>
            Our Clients <HighlightedText>Love Us</HighlightedText>
          </>
        }
      />
      <Pricing
        heading={
          <>
            Flexible <HighlightedText>Plans</HighlightedText>
          </>
        }
      />
      <FAQ
        heading={
          <>
            Any <HighlightedText>Questions ?</HighlightedText>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
};
