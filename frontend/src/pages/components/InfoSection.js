// src/pages/InfoSection.js
import React from "react";
import { VStack, Text, Box, Flex } from "@chakra-ui/react";
import { accentOne, accentTwo, primaryColor } from "../../themeSettings";

// Section Component
const Section = ({ title, description }) => (
  <Box bg={accentTwo} textAlign="center" p={4} borderRadius="md" w="80%">
    <Text fontSize="xl" fontWeight="bold" mb={2}>
      {title}
    </Text>
    <Text>{description}</Text>
  </Box>
);

// InfoSection Component
const InfoSection = () => {
  const sections = [
    {
      title: "About Us",
      description:
        "JeepNe is a full-service, independent software engineering firm specializing in website design, local business integrations, and SEO advertising.",
    },
    {
      title: "Demo",
      description:
        "We offer free consultations to assess your market needs and develop a tailored strategy.",
    },
    {
      title: "The Process",
      description:
        "We create impactful business solutions that engage customers and enhance your brand's presence.",
    },
    {
      title: "The Result",
      description:
        "Our innovative content and branding strategies will attract customers and strengthen your brand identity.",
    },
    {
      title: "Contact Us",
      description:
        "Let's discuss how we can help you achieve your business goals. Contact us to start building your success today.",
    },
  ];

  return (
    <VStack bg={accentOne} p={4} spacing={8} align="center" textAlign="center">
      {sections.map((section, index) => (
        <Section
          key={index} // Use index as a key if section titles are not unique
          title={section.title}
          description={section.description}
        />
      ))}
    </VStack>
  );
};

export default InfoSection;
