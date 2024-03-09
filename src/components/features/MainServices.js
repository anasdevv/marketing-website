import HeaderBase from 'components/headers/light.js';
import {
  Container as ContainerBase,
  ContentWithPaddingXl,
} from 'components/misc/Layouts';
import { SectionHeading } from 'components/misc/Headings.js';
import { SectionDescription } from 'components/misc/Typography.js';
import tw from 'twin.macro';
const SHeading = tw(
  SectionHeading
)`text-left text-blue-600 leading-snug xl:text-4xl`;
const Description = tw(
  SectionDescription
)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const Container2 = tw(
  ContainerBase
)` lg:py-8 py-6 xl:py-10 bg-gray-100 text-gray-300 -mx-8 px-8 lg:px-20`;
const Header = tw(HeaderBase)`max-w-none`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div`md:w-1/2 lg:w-1/3 max-w-sm`;
const TextColumn = tw(
  Column
)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl bg-gray-200 p-5 rounded shadow-md`;
const Heading = tw(
  SectionHeading
)`text-left text-primary-800  leading-snug xl:text-3xl`;
const CenteredDiv = tw.div`flex items-center justify-center w-full`;
export default ({}) => (
  <Container2>
    <CenteredDiv>
      <Heading>Experience Excellence Inside and Out</Heading>
    </CenteredDiv>

    <Row>
      {/* <div className='px-'> */}
      <TextColumn>
        <SHeading>Interior</SHeading>
        <Description>
          vacuum seats, carpets, trunk and floor mats, full wipe down all
          surfaces, dress all plastics, apply leather conditioner, clean
          interior windows, and air freshener.
        </Description>
      </TextColumn>
      <TextColumn>
        <SHeading>Exterior</SHeading>
        <Description>
          Foam soap hand wash, pressure washer rinse, clean degrease and dress
          wheels, tires and rims, clean all door jabs and trunk sealants,
          microfiber cloth dry.
        </Description>
      </TextColumn>
      {/* </div> */}
    </Row>
  </Container2>
);
