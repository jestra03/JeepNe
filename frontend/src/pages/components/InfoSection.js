// src/pages/InfoSection.js
import React from "react";
import { VStack, Text, Box, Flex } from "@chakra-ui/react";
import { FaBeer, FaCoffee, FaCar, FaLaptop, FaPhone } from "react-icons/fa";

// Section Component
const Section = ({ title, description, icon }) => (
  <Box textAlign="center" p={4} borderWidth={1} borderRadius="md" w="80%">
    <Text fontSize="xl" fontWeight="bold" mb={2}>
      {title}
    </Text>
    <Flex align="center" justify="flex-start">
      <Box as={icon} fontSize="2xl" mr={4} color="teal.500" />
      <Text textAlign="left">{description}</Text>
    </Flex>
  </Box>
);

// InfoSection Component
const InfoSection = () => {
  const sections = [
    {
      title: "About Us",
      description:
        "JeepNe is a full-service, independent software engineering firm specializing in website design, local business integrations, and SEO advertising.",
      icon: FaLaptop,
    },
    {
      title: "Demo",
      description:
        "We offer free consultations to assess your market needs and develop a tailored strategy.",
      icon: FaCoffee,
    },
    {
      title: "The Process",
      description:
        "We create impactful business solutions that engage customers and enhance your brand's presence.",
      icon: FaBeer,
    },
    {
      title: "The Result",
      description:
        "Our innovative content and branding strategies will attract customers and strengthen your brand identity.",
      icon: FaCar,
    },
    {
      title: "Contact Us",
      description:
        "Let's discuss how we can help you achieve your business goals. Contact us to start building your success today.",
      icon: FaPhone,
    },
  ];

  return (
    <VStack spacing={8} align="center" textAlign="center">
      {sections.map((section, index) => (
        <Section
          key={index} // Use index as a key if section titles are not unique
          title={section.title}
          description={section.description}
          icon={section.icon}
        />
      ))}
    </VStack>
  );
};

export default InfoSection;
