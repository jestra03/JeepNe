// src/pages/LaunchPage.js
import React, { useState } from 'react';
import { Box, Container, Heading, Text, Flex, VStack, Image } from '@chakra-ui/react';
import AvbSlideshow from './components/AvbSlideshow';
import ChecklistTypeSection from './components/ChecklistTypeSection';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';

const slides = [
    {
        id: 1,
        smallHeader: 'Ready to redefine your online presence?',
        bigHeader: 'Build your business with Jeepney',
        description: 'We offer a local business alternative with no commission fees, tools to boost customer engagement, and fully customized solutions that capture your unique character.',
        buttonText: 'Build Your Business',
        buttonAction: () => document.getElementById('business-type').scrollIntoView({ behavior: 'smooth' }),
        image: slide1, // Adjust the path accordingly
        },
        {
        id: 2,
        smallHeader: 'Want to expand your outreach?',
        bigHeader: 'We Create Interactive Experiences',
        description: 'Our services will help you reach and engage the broad spectrum of consumers that actively use digital media.',
        buttonText: 'Learn More',
        buttonAction: () => document.getElementById('info-section').scrollIntoView({ behavior: 'smooth' }),
        image: slide2, // Adjust the path accordingly
        }
];

const portfolioImages = [
  { src: '/path/to/image1.jpg', link: 'https://example.com' },
  { src: '/path/to/image2.jpg', link: 'https://example.com' },
  { src: '/path/to/image3.jpg', link: 'https://example.com' },
  // Add more images as needed
];

const LaunchPage = () => {
  const [businessType, setBusinessType] = useState('Restaurant');

  return (
    <Box fontFamily="'Manrope', sans-serif">
      {/* 1st Section */}
      <AvbSlideshow slides={slides} />

      {/* 2nd Section */}
      <div style={{marginTop:"50px"}}/>
      <ChecklistTypeSection />

      {/* 3rd Section */}
      <Container id="info-section" maxW="container.md" my={12}>
        <VStack spacing={8} align="center" textAlign="center">
            <Section title="About Us" description="JeepNe is a full-service, independent software engineering firm specializing in website design, local business integrations, and SEO advertising." />
            <Section title="Demo" description="We offer free consultations to assess your market needs and develop a tailored strategy." />
            <Section title="The Process" description="We create impactful business solutions that engage customers and enhance your brand's presence." />
            <Section title="The Result" description="Our innovative content and branding strategies will attract customers and strengthen your brand identity." />
            <Section title="Contact Us" description="Let's discuss how we can help you achieve your business goals. Contact us to start building your success today." />
        </VStack>
    </Container>

      {/* Portfolio Section */}
      <Container maxW="container.md" my={12}>
        <VStack spacing={8} align="start">
          <Heading size="lg">Our Work</Heading>
          <Flex wrap="wrap" justify="center">
            {portfolioImages.map((image, index) => (
              <Box key={index} p={2} width="200px">
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <Image src={image.src} alt={`Portfolio item ${index + 1}`} borderRadius="md" boxShadow="md" />
                </a>
              </Box>
            ))}
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

const Section = ({ title, description }) => (
  <Box>
    <Heading size="md">{title}</Heading>
    <Text mt={2}>{description}</Text>
  </Box>
);

export default LaunchPage;
