// src/pages/ChecklistTypeSection.js
import React, { useState, useEffect, useCallback } from "react";
import { Box, Button, Flex, VStack, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

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
  <Flex align="center">
    <Box as="span" size="6" mr={2} color="green.500">
      &#10003;
    </Box>
    <Text fontSize="lg">{children}</Text>
  </Flex>
);

const ChecklistTypeSection = () => {
  const [businessType, setBusinessType] = useState("Restaurant");
  const [showContent, setShowContent] = useState(true);
  const [fadeContent, setFadeContent] = useState(true);
  const [transitioning, setTransitioning] = useState(false); // New state to manage transitions

  const selectedType = businessTypes.find((bt) => bt.type === businessType);

  const handleBusinessTypeChange = useCallback(
    (type) => {
      if (businessType === type) {
        return;
      }
      if (!transitioning) {
        setTransitioning(true);
        setFadeContent(false);

        // After fade-out completes, update businessType and start fade-in
        const timer = setTimeout(() => {
          setBusinessType(type);
          setFadeContent(true);
          const transitionEndTimer = setTimeout(() => {
            setTransitioning(false);
          }, 500); // Match the duration of your fade-in animation

          return () => clearTimeout(transitionEndTimer); // Clean up timer on unmount
        }, 400); // Match the duration of your fade-out animation

        return () => clearTimeout(timer); // Clean up timer on unmount
      }
    },
    [transitioning]
  );

  useEffect(() => {
    // Set showContent to false to start fade-out animation
    setShowContent(false);

    // After fade-out animation completes, hide content
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 400); // Match the duration of your fade-out animation

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [fadeContent]);

  return (
    <Flex direction="column" align="center" justify="center" textAlign="center">
      {/* Buttons Container */}
      <Flex direction="row" wrap="wrap" justify="center" mb={6}>
        {businessTypes.map((bt) => (
          <Button
            key={bt.type}
            variant="outline"
            m={2}
            onClick={() => handleBusinessTypeChange(bt.type)}
          >
            {bt.type}
          </Button>
        ))}
      </Flex>

      {/* Content Container */}
      <Box
        width="80%"
        maxW="800px"
        height="auto"
        minH="390px"
        border="1px"
        borderColor="gray.300"
        borderRadius="md"
        p={4}
        boxShadow="md"
        bg="white"
        marginBottom="20px"
      >
        <AnimatePresence>
          {showContent && selectedType && (
            <motion.div
              key={selectedType.type} // Key to trigger animation
              initial={{ opacity: fadeContent ? 0 : 1 }}
              animate={{ opacity: fadeContent ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }} // Adjust the duration as needed
            >
              <VStack spacing={4} align="start">
                <Text fontSize="lg">{selectedType.description}</Text>
                <VStack spacing={2} align="start">
                  {selectedType.checklist.map((item, index) => (
                    <ChecklistItem key={index}>{item}</ChecklistItem>
                  ))}
                </VStack>
              </VStack>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Flex>
  );
};

export default ChecklistTypeSection;
