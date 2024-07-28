import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import ComparisonSection from "./components/ComparisonTable";
import { motion } from "framer-motion";

const PricingPage = () => {
  const restaurantFeatures = [
    "Carryout Solution",
    "Customized Website",
    "SEO",
    "Website Dashboard",
    "Delivery Solution",
    "Reservation System",
    "Point of Sale (POS) Integration",
    "Website Integrated with JeepNe Ecosystem",
    "Advertisements",
    "Comprehensive Marketing Strategy",
    "Video & Photo Editing",
  ];
  const restaurantPlans = {
    Basic: [
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    Pro: [true, true, true, true, true, true, true, true, false, false, false],
    Elite: [true, true, true, true, true, true, true, true, true, true, true],
  };

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <ComparisonSection features={restaurantFeatures} data={restaurantPlans} />
    </Box>
  );
};

export default PricingPage;
