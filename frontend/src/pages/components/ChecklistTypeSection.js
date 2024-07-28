// src/pages/ChecklistTypeSection.js
import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Flex, VStack, Text, Fade } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { accentOne, accentTwo, primaryColor } from "../../themeSettings.js"; //Importing theme colors
import { useNavigate } from "react-router-dom";

const businessTypes = [
  {
    type: "Restaurant",
    description:
      "Maximize your profits with our Restaurant Business Plan. Start receiving online and mobile orders with ease, providing your customers the convenience to order from your restaurant anytime, anywhere.",
    checklist: [
      "Online Carryout",
      "Online Delivery",
      "Commission Free Transactions",
      "POS (Point-of-Sale) Integrations",
      "Advertisements",
      "Customizable Website",
      "Video & Photo editing",
    ],
  },
  {
    type: "Store",
    description:
      "Boost your profits with our Store Business Plan. Expand your retail reach with commission-free transactions, seamless inventory system integration, and a customized website that highlights your unique products.",
    checklist: [
      "Online Ordering",
      "Commission Free Transactions",
      "Inventory Management",
      "POS Integration",
      "Advertisements",
      "Customizable Website",
      "Visual Media Production",
    ],
  },
  {
    type: "Service Provider",
    description:
      "Elevate your earnings with our Service Provider Business Plan. Enhance your service efficiency with streamlined client scheduling, tailored service pages, and robust tools to manage bookings and inquiries.",
    checklist: [
      "Client Scheduling",
      "Booking Management",
      "Custom Service Pages",
      "Commission Free Transactions",
      "Client Communication Tools",
      "Customizable Website",
      "Professional Media Content",
    ],
  },
];

const ChecklistItem = ({ children }) => (
  <Flex>
    <Box as="span" size="6" mr={2} color={accentTwo}>
      &#10003;
    </Box>
    <Text textAlign="left" fontSize="lg">
      {children}
    </Text>
  </Flex>
);

const ChecklistTypeSection = () => {
  const [businessType, setBusinessType] = useState("None");

  const selectedType = businessTypes.find((bt) => bt.type === businessType);

  const elementRef = useRef(null); //Used to scroll to checklist when opened

  const navigate = useNavigate();

  useEffect(() => {
    //Used to scroll to checklist when opened
    const offset = 70; //To account for the navbar
    if (elementRef.current && businessType !== "None") {
      const elementTop =
        elementRef.current.getBoundingClientRect().top + window.pageYOffset;
      const scrollToPosition = elementTop - offset;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  }, [businessType]);

  return (
    <Flex
      ref={elementRef}
      direction="column"
      align="center"
      justify="top"
      textAlign="center"
      minH="300px"
    >
      <h1 style={{ fontSize: "4vw", fontWeight: "bold" }}>
        What Kind Of Business Are You?
      </h1>
      {/* Buttons Container */}
      <Flex direction="row" justify="center">
        {businessTypes.map((bt) => (
          <Button
            key={bt.type}
            m={3}
            marginBottom={{ base: 2, md: 0 }}
            fontSize={{ base: "0.9rem", sm: "1.3rem" }}
            borderBottomRadius={{ base: "", md: 0 }}
            cursor="pointer"
            backgroundColor={
              businessType === bt.type ? primaryColor : accentOne
            }
            color={businessType === bt.type ? accentOne : primaryColor}
            onClick={() => setBusinessType(bt.type)}
            sx={{
              "&:hover": {
                backgroundColor: primaryColor,
                color: accentOne,
                pointerEvents: "",
              },
            }}
            as={motion.div}
            transition="0.5s linear"
          >
            {bt.type}
          </Button>
        ))}
      </Flex>
      {!selectedType && (
        <Box marginTop={10}>
          <Text opacity={0.5} color={primaryColor}>
            Select a Business Type Above
          </Text>
        </Box>
      )}
      {/* Content Container */}
      {selectedType && (
        <Fade
          align="center"
          in={selectedType}
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box
            width="80%"
            maxW="800px"
            height="auto"
            borderRadius="md"
            p={4}
            bg={primaryColor}
            marginBottom="20px"
          >
            <Fade
              key={businessType}
              in={selectedType}
              transition={{ enter: { duration: 1 } }}
            >
              <VStack spacing={4} align="start" color={accentOne}>
                <Text color={accentOne} fontSize="lg">
                  {selectedType.description}
                </Text>
                <VStack spacing={2} align="left">
                  {selectedType.checklist.map((item, index) => (
                    <ChecklistItem key={index}>{item}</ChecklistItem>
                  ))}
                  <Button
                    onClick={() => {
                      navigate("/pricing-plans");
                    }}
                  >
                    <Text>Explore Pricing {"->"}</Text>
                  </Button>
                </VStack>
              </VStack>
            </Fade>
          </Box>
        </Fade>
      )}
    </Flex>
  );
};

export default ChecklistTypeSection;
