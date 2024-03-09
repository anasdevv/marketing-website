import React from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import {
  Container as ContainerBase,
  ContentWithPaddingXl,
} from 'components/misc/Layouts';
import { SectionDescription } from 'components/misc/Typography';

const Container = tw(
  ContainerBase
)`my-8 lg:my-10 bg-primary-900 text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(
  SectionDescription
)`text-gray-400 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`;
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`;
const StatKey = tw.div`text-xl font-medium`;
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const BText = tw.p`text-xl  sm:text-xl md:text-2xl lg:text-3xl text-center font-bold`;
const GridContainer = tw.div`bg-primary-700 rounded mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`;
const GridCol = tw.div`flex  flex-col items-start justify-center px-3 py-2`;
const Grid = tw.div`flex items-center tracking-wide text-center  sm:px-8 lg:px-16 justify-between `;
const Span = tw.span`font-bold`;
export default ({
  subheading = '',
  heading = 'Over 1,000 Cars Transformed',
  description = 'Sophie, a dedicated SparkShine enthusiast, has experienced the transformation of over 10,000 cars. Her trust in SparkShine reflects the quality and satisfaction that our detailing services bring to our customers.',
  stats = [
    {
      key: 'Clients',
      value: '1200+',
    },
    {
      key: 'Revenue',
      value: '$100K+',
    },
    {
      key: 'Employees',
      value: '50+',
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <StatsContainer>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}
        </StatsContainer>
        <StatsContainer>
          <BText>
            Serving over 15+ cities all over the nation including Orlando FL
          </BText>
          <Grid>
            <GridCol>
              <Span>Tampa FL </Span>
              <Span>Daytona FL</Span>
              <Span>Miami FL</Span>
              <Span>North Bergen NJ</Span>
              <Span>Coeur D'Alene ID</Span>
            </GridCol>
            <GridCol>
              <Span>Newark NY</Span>
              <Span>Knoxville TN</Span>
              <Span>Spanway WA </Span>
              <Span> Washington DC </Span>
              <Span> Billings MT</Span>
            </GridCol>

            <GridCol>
              <Span>Maryland DC</Span>
              <Span>Alexandria VA</Span>
              <Span>Salt lake City UT</Span>
              <Span> Houston Tx</Span>
              <Span> Boise ID</Span>
            </GridCol>
            <GridCol>
              <Span>Denver Co </Span>
              <Span>Sacramento CA </Span>
              <Span>Atlanta GA</Span>
              <Span> kalispell MT</Span>
              <Span> Nashville TN</Span>
            </GridCol>
          </Grid>
        </StatsContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
