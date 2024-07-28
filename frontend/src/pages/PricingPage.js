import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, VStack, Text } from "@chakra-ui/react";
import ComparisonSection from "./components/ComparisonSection";
import { primaryColor, accentOne, accentTwo } from "../themeSettings";
import { motion } from "framer-motion";

const PricingPage = () => {
  const { type } = useParams();
  const [businessType, setBusinessType] = useState(type);
  const businessTypes = ["Restaurant", "Store", "Service Provider"];
  console.log(businessType);
  const features = {
    restaurantFeatures: [
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
    ],
    storeFeatures: [
      "E-commerce Integration",
      "Customized Website",
      "SEO",
      "Shipping Solution",
      "Point of Sale (POS) Integration",
      "Video & Photo Editing",
      "Website Integrated with JeepNe Ecosystem",
      "Advertisements",
      "Comprehensive Marketing Strategy",
      "Inventory Management",
      "Video & Photo Editing",
    ],
    serviceProvider: [
      "Appointment Booking System",
      "Customized Website",
      "SEO",
      "Customer Management System",
      "Video & Photo Editing",
      "Website Integrated with JeepNe Ecosystem",
      "Advertisements",
      "Comprehensive Marketing Strategy",
      "Video & Photo Editing",
    ],
  };
  const plans = {
    restaurantPlans: {
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
      Pro: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
      ],
      Elite: [true, true, true, true, true, true, true, true, true, true, true],
    },
    storePlans: {
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
      Pro: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      Elite: [true, true, true, true, true, true, true, true, true, true, true],
    },
    serviceProviderPlans: {
      Basic: [true, true, true, false, false, false, false, false, false],
      Pro: [true, true, true, true, true, true, false, false, false],
      Elite: [true, true, true, true, true, true, true, true, true],
    },
  };

  function determineFeatures() {
    for (let i = 0; i < businessTypes.length; i++) {
      if (businessType === businessTypes[i]) {
        return features[Object.keys(features)[i]];
      }
    }
    return null;
  }
  function determinePlans() {
    for (let i = 0; i < businessTypes.length; i++) {
      if (businessType === businessTypes[i]) {
        return plans[Object.keys(plans)[i]];
      }
    }
    return null;
  }

  return (
    <Box>
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
        <VStack>
          <Box>
            {businessTypes.map((business, index) => (
              <Button
                key={business}
                m={3}
                fontSize={{ base: "0.9rem", sm: "1.3rem" }}
                cursor="pointer"
                backgroundColor={
                  businessType === business ? primaryColor : accentOne
                }
                color={businessType === business ? accentOne : primaryColor}
                as={motion.div}
                transition="0.5s linear"
                onClick={() => {
                  setBusinessType(business);
                }}
              >
                {business}
              </Button>
            ))}
          </Box>
          {businessType && (
            <ComparisonSection
              features={determineFeatures()}
              data={determinePlans()}
            />
          )}
          {businessType === "selectPlan" && (
            <Box marginTop={10}>
              <Text opacity={0.5} color={primaryColor}>
                Select a Business Type Above
              </Text>
            </Box>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default PricingPage;
