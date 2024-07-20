// src/pages/LaunchPage.js
import React, { useState } from 'react';
import { Box, Button, Container, Heading, Text, Flex, VStack, Image } from '@chakra-ui/react';
import AvbSlideshow from './components/AvbSlideshow';
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
      <Container id="business-type" maxW="container.md" my={12}>
        <Flex direction="column" align="center" justify="center" textAlign="center">
          <Button variant="outline" m={2} onClick={() => setBusinessType('Restaurant')}>
            Restaurant
          </Button>
          <Button variant="outline" m={2} onClick={() => setBusinessType('Store')}>
            Store
          </Button>
          <Button variant="outline" m={2} onClick={() => setBusinessType('Service Provider')}>
            Service Provider
          </Button>

          <Box mt={6}>
            {businessType === 'Restaurant' && (
              <VStack spacing={4} align="start">
                <Text fontSize="lg">Maximize your profits by choosing our Restaurant Business Plan. Commission free ordering, responsive delivery system that works with your POS system connecting you and the Customer.</Text>
                <VStack spacing={2} align="start">
                  <ChecklistItem>Carryout Solution</ChecklistItem>
                  <ChecklistItem>Delivery Solution</ChecklistItem>
                  <ChecklistItem>Point of Sale (POS) Integrations</ChecklistItem>
                  <ChecklistItem>Commission Free Transactions</ChecklistItem>
                  <ChecklistItem>Customized Website</ChecklistItem>
                  <ChecklistItem>Advertizements</ChecklistItem>
                  <ChecklistItem>SEO</ChecklistItem>
                  <ChecklistItem>Video & Photo editing</ChecklistItem>
                </VStack>
              </VStack>
            )}
            {businessType === 'Store' && (
              <VStack spacing={4} align="start">
                <Text fontSize="lg">Increase your retail reach with our Store Business Plan. Enjoy commission-free transactions, a seamless inventory system integration, and a customized website that highlights your unique products.</Text>
                <VStack spacing={2} align="start">
                  <ChecklistItem>Inventory Management</ChecklistItem>
                  <ChecklistItem>Online Ordering</ChecklistItem>
                  <ChecklistItem>POS Integration</ChecklistItem>
                  <ChecklistItem>Commission Free Transactions</ChecklistItem>
                  <ChecklistItem>Custom Website Design</ChecklistItem>
                  <ChecklistItem>Marketing Tools</ChecklistItem>
                  <ChecklistItem>SEO Optimization</ChecklistItem>
                  <ChecklistItem>Visual Media Production</ChecklistItem>
                </VStack>
              </VStack>
            )}
            {businessType === 'Service Provider' && (
              <VStack spacing={4} align="start">
                <Text fontSize="lg">Optimize your service offerings with our Service Provider Business Plan. Gain access to streamlined client scheduling, customized service pages, and tools to manage bookings and inquiries.</Text>
                <VStack spacing={2} align="start">
                  <ChecklistItem>Client Scheduling</ChecklistItem>
                  <ChecklistItem>Booking Management</ChecklistItem>
                  <ChecklistItem>Custom Service Pages</ChecklistItem>
                  <ChecklistItem>Commission Free Transactions</ChecklistItem>
                  <ChecklistItem>Customizable Website</ChecklistItem>
                  <ChecklistItem>Client Communication Tools</ChecklistItem>
                  <ChecklistItem>SEO Services</ChecklistItem>
                  <ChecklistItem>Professional Media Content</ChecklistItem>
                </VStack>
              </VStack>
            )}
          </Box>
        </Flex>
      </Container>

      {/* 3rd Section */}
      <Container id="info-section" maxW="container.md" my={12}>
        <VStack spacing={8} align="start">
          <Section title="About Us" description="AVB Social is a full-service, independent marketing firm specializing in digital media content building, integration and dissemination across social media and other digital outlets." />
          <Section title="The Start" description="Our marketing content is one of a kind, and we believe your brand should be too. Our approach is customized and tailored to make your products stand out in the crowd." />
          <Section title="The Process" description="We generate beautiful and effective media campaigns that attract active followers. We pride ourselves in creating original and visually stunning content." />
          <Section title="The Result" description="Our original content and creative branding will enable your company to cultivate stronger relationships with your consumers while communicating your brand values." />
          <Section title="Contact Us" description="We look forward to discussing how we can help you achieve your business goals. Get in touch with us to start the conversation." />
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

const ChecklistItem = ({ children }) => (
  <Flex align="center">
    <Box as="span" size="6" mr={2} color="green.500">&#10003;</Box>
    <Text fontSize="lg">{children}</Text>
  </Flex>
);

const Section = ({ title, description }) => (
  <Box>
    <Heading size="md">{title}</Heading>
    <Text mt={2}>{description}</Text>
  </Box>
);

export default LaunchPage;
