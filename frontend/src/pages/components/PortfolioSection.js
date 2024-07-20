// src/components/PortfolioSection.js
import React from 'react';
import { Container, VStack, Heading, Flex, Box, Image } from '@chakra-ui/react';

const PortfolioSection = ({ portfolioImages }) => {
  return (
    <Container maxW="container.md" my={12} centerContent>
      <VStack spacing={8} align="center" textAlign="center">
        <Heading size="lg">Our Work</Heading>
        <Flex wrap="wrap" justify="center">
          {portfolioImages.map((image, index) => (
            <Box key={index} p={2} width="200px">
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={image.src}
                  alt={`Portfolio item ${index + 1}`}
                  borderRadius="md"
                  boxShadow="md"
                />
              </a>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Container>
  );
};

export default PortfolioSection;
