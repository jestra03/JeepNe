import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import {
  Box,
  Button,
  VStack,
  Text,
  Divider,
  HStack,
  Flex,
  Circle,
} from "@chakra-ui/react";
import ComparisonSection from "./components/ComparisonSection";
import {
  primaryColor,
  accentOne,
  accentTwo,
  textColor2,
} from "../themeSettings";
import { motion } from "framer-motion";
import * as Utils from "../Utilities.js";
import FaqSection from "./components/FaqSection.js";

const PricingPage = () => {
  const { type } = useParams();
  const [businessType, setBusinessType] = useState(type);
  const businessTypes = ["Restaurant", "Store", "Service Provider"];
  const [exploreSection, setExploreSection] = useState(false);
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

  const prices = {
    Basic: "$25",
    Pro: "$99",
    Elite: "$199",
  };

  const exploreSectionRef = useRef(null);

  useEffect(() => {
    // When the button "explore why our plans are better" is pressed, scroll to element
    if (exploreSectionRef.current && exploreSection) {
      Utils.scrollToRef(exploreSectionRef);
    }
  }, [exploreSection]);

  useEffect(() => {
    // Close the explore section when scrolled all the way up
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setExploreSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check if the page is already scrolled to the top
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function determineFeatures() {
    // Based on the selected businesstype, return the object containing its features
    for (let i = 0; i < businessTypes.length; i++) {
      if (businessType === businessTypes[i]) {
        return features[Object.keys(features)[i]];
      }
    }
    return null;
  }

  function determinePlans() {
    // Based on the selected businesstype, return the object containing its plans
    for (let i = 0; i < businessTypes.length; i++) {
      if (businessType === businessTypes[i]) {
        return plans[Object.keys(plans)[i]];
      }
    }
    return null;
  }

  const CircleSection = ({ title, description }) => {
    return (
      <Circle
        bg={accentTwo}
        width={{ base: "80vw", md: "300px" }}
        height={{ base: "80vw", md: "300px" }}
        flexDir="column"
        p={10}
      >
        <Text
          color={textColor2}
          fontSize={{ base: "medium", sm: "2.5rem", md: "xx-large" }}
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text color={accentOne} fontWeight="bold">
          {description}
        </Text>
      </Circle>
    );
  };

  return (
    <Box fontFamily="'Manrope', sans-serif">
      <Box
        paddingTop={100}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
      >
        <Box>
          <VStack>
            <Box>
              {businessTypes.map((business, index) => (
                <Button
                  key={business}
                  m={{ base: 1, sm: 3 }}
                  fontSize={{ base: "0.9rem", sm: "1.3rem" }}
                  cursor="pointer"
                  backgroundColor={
                    businessType === business ? primaryColor : accentOne
                  }
                  color={businessType === business ? accentOne : accentTwo}
                  _hover={{
                    color: businessType !== business ? primaryColor : "",
                  }}
                  onClick={() => {
                    setBusinessType(business);
                  }}
                >
                  {business}
                </Button>
              ))}
              <Divider />
            </Box>

            <Box
              m={5}
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.7 } }}
            >
              <ComparisonSection
                features={determineFeatures()}
                data={determinePlans()}
                prices={prices}
              />
            </Box>

            {businessType === "selectPlan" && (
              <Box marginTop={5}>
                <Text opacity={0.5} color={primaryColor}>
                  Select a Business Type Above
                </Text>
              </Box>
            )}
          </VStack>
        </Box>
        {businessType !== "selectPlan" && !exploreSection && (
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.7 } }}
          >
            <Text
              fontSize={{ base: "medium", sm: "x-large" }}
              color={accentTwo}
            >
              Explore why our plans are better.
            </Text>
            <button
              onClick={() => {
                setExploreSection(true);
              }}
            >
              <IoIosArrowDown color={accentTwo} size="40" />
            </button>
          </Box>
        )}
      </Box>
      {exploreSection && (
        <VStack ref={exploreSectionRef} m={10}>
          <CircleSection
            title="Commission-Free Transactions"
            description="Unlike our competitors."
          />

          <Divider
            borderColor={accentTwo}
            borderWidth="5px"
            width="50px"
            opacity={1}
            style={{ rotate: "90deg" }}
            zIndex={-1}
          />
          <CircleSection
            title="Fully Customized Websites"
            description="To make your page stand out from the crowd."
          />
          <Divider
            borderColor={accentTwo}
            borderWidth="5px"
            width="50px"
            opacity={1}
            style={{ rotate: "90deg" }}
            zIndex={-1}
          />
          <CircleSection
            title="Direct Support From Us"
            description="For the ups and downs of running a business."
          />
          <Divider
            borderColor={accentTwo}
            borderWidth="5px"
            width="50px"
            opacity={1}
            style={{ rotate: "90deg" }}
            zIndex={-1}
          />
          <CircleSection
            title="Free Demos and Consultations"
            description="So you can try before you buy."
          />
          <FaqSection />
        </VStack>
      )}
    </Box>
  );
};

export default PricingPage;
