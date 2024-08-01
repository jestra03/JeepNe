import React from "react";
import {
  Box,
  Button,
  VStack,
  Text,
  Divider,
  HStack,
  Flex,
  Circle,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { accentTwo, primaryColor } from "../themeSettings";

function Footer() {
  return (
    <Flex
      bottom="0"
      width="100%"
      align={{ base: "left", sm: "center" }}
      justify="start"
      bg={primaryColor}
      color={accentTwo}
      p={10}
      flexDir={{ base: "column", sm: "row" }}
    >
      <Flex textAlign="left" flexDir="column">
        <Text fontWeight="extrabold">JeepNe</Text>
        <Link as={RouterLink} to="/about">
          About
        </Link>
        <Link as={RouterLink} to="/pricing-plans">
          Pricing
        </Link>
      </Flex>
    </Flex>
  );
}

export default Footer;
