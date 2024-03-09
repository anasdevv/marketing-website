import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import { SectionDescription } from 'components/misc/Typography.js';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js';
import { ReactComponent as ChevronDownIcon } from 'feather-icons/dist/icons/chevron-down.svg';
import { ReactComponent as SvgDecoratorBlob1 } from 'images/svg-decorator-blob-7.svg';
import { ReactComponent as SvgDecoratorBlob2 } from 'images/svg-decorator-blob-8.svg';

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  subheading = 'FAQS',
  heading = 'You have Questions ?',
  description = 'And we have got answers to all of them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  faqs = [
    {
      question: 'What is car detailing?',
      answer:
        'Car detailing involves a thorough cleaning and restoration process of both the interior and exterior of a vehicle, aiming to enhance its appearance and condition.',
    },
    {
      question: 'What services do you offer?',
      answer:
        'We offer a comprehensive range of detailing services, including exterior wash and wax, interior vacuuming and shampooing, leather conditioning, paint correction, ceramic coating, and more.',
    },
    {
      question: 'How often should I get my car detailed?',
      answer:
        'The frequency of detailing depends on various factors such as usage, environment, and personal preference. As a general guideline, we recommend detailing your car every 3 to 6 months for optimal maintenance.',
    },
    {
      question: "What's the difference between car washing and car detailing?",
      answer:
        'While car washing primarily focuses on removing dirt and grime from the surface, car detailing involves a more thorough cleaning and restoration process, addressing both the exterior and interior of the vehicle to achieve a pristine finish.',
    },
    {
      question: 'Do you offer mobile detailing services?',
      answer:
        'Yes, we provide convenient mobile detailing services, bringing our expertise and equipment directly to your location for added convenience.',
    },
    {
      question: 'How long does a detailing service typically take?',
      answer:
        'The duration of a detailing service depends on the level of service selected and the condition of the vehicle. On average, our detailing services range from 2 to 6 hours.',
    },
    {
      question: 'What products do you use for detailing?',
      answer:
        "We utilize premium-quality detailing products and equipment from reputable brands to ensure exceptional results without compromising the integrity of your vehicle's surfaces.",
    },
    {
      question: 'Can you remove scratches and swirl marks?',
      answer:
        "Yes, our skilled technicians employ advanced techniques and tools to effectively remove scratches, swirl marks, and other imperfections, restoring your vehicle's paint to a flawless finish.",
    },
    {
      question: 'Do you offer interior detailing services?',
      answer:
        "Absolutely, our interior detailing services include thorough cleaning, vacuuming, steaming, and conditioning to rejuvenate and protect your vehicle's interior surfaces.",
    },
    {
      question: 'What steps are involved in a full detailing service?',
      answer:
        'Our full detailing service typically includes exterior wash, clay bar treatment, paint correction, interior vacuuming and shampooing, leather conditioning, glass cleaning, and application of protective coatings.',
    },
    {
      question: 'How much does car detailing cost?',
      answer:
        'The cost of detailing varies depending on the type of service, size of the vehicle, and its condition. Please contact us for a personalized quote based on your specific requirements.',
    },
    {
      question: 'Do you offer any discounts or packages?',
      answer:
        'Yes, we offer competitive pricing and various detailing packages to cater to different needs and budgets. Check our website or contact us for current promotions and discounts.',
    },
    {
      question: 'Is detailing safe for all types of vehicles?',
      answer:
        'Yes, our detailing processes are safe for all types of vehicles, including luxury cars, SUVs, trucks, and more. We tailor our services to suit the specific needs of each vehicle, ensuring optimal results.',
    },
    {
      question: 'How can I maintain the results of my detailing service?',
      answer:
        'We provide personalized maintenance tips and recommendations to help you preserve the results of your detailing service and keep your vehicle looking its best between appointments.',
    },
    {
      question: 'Do you offer any warranties or guarantees on your work?',
      answer:
        'Yes, we stand behind the quality of our workmanship and offer warranties or guarantees on certain services. Please inquire about our warranty policy for more information.',
    },
    {
      question: 'Can I schedule an appointment online?',
      answer:
        'Yes, you can easily schedule an appointment online through our website or by contacting our customer service team directly.',
    },
    {
      question:
        'How far in advance should I schedule my detailing appointment?',
      answer:
        'We recommend scheduling your detailing appointment at least a few days in advance to ensure availability. However, we also accommodate last-minute bookings whenever possible.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods, including credit/debit cards, cash, and electronic payments for your convenience.',
    },
    {
      question: 'Do you offer gift certificates for detailing services?',
      answer:
        'Yes, we offer gift certificates that make perfect gifts for car enthusiasts or anyone who appreciates a clean and well-maintained vehicle. Contact us to purchase one today.',
    },
    {
      question: 'What safety measures do you have in place for COVID-19?',
      answer:
        'We prioritize the health and safety of our customers and staff by strictly adhering to all recommended COVID-19 safety protocols, including wearing masks, sanitizing equipment, and practicing social distancing during appointments.',
    },
  ],
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className='group'
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 },
                    }}
                    initial='collapsed'
                    animate={
                      activeQuestionIndex === index ? 'open' : 'collapsed'
                    }
                    transition={{
                      duration: 0.02,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: 'auto', marginTop: '16px' },
                    collapsed: { opacity: 0, height: 0, marginTop: '0px' },
                  }}
                  initial='collapsed'
                  animate={activeQuestionIndex === index ? 'open' : 'collapsed'}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
