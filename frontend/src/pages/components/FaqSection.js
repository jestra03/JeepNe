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
} from "@chakra-ui/react";
import { textColor2 } from "../../themeSettings";

function FaqSection() {
  const QA = ({ question, answer }) => {
    return (
      <Box>
        <Text
          color={textColor2}
          fontSize={{ base: "small", sm: "1.5rem", md: "x-large" }}
          fontWeight="bold"
        >
          {question}
        </Text>
        <Text
          color={textColor2}
          fontSize={{ base: "small", sm: "1.rem", md: "large" }}
        >
          {answer}
        </Text>
      </Box>
    );
  };
  return (
    <Box width={{ base: "70vw", md: "50vw" }}>
      <Text
        color={textColor2}
        fontSize={{ base: "small", sm: "2.5rem", md: "xx-large" }}
        fontWeight="bold"
        m={4}
      >
        Frequently Asked Questions
      </Text>
      <QA
        question="What is the JeepNe Ecosystem?"
        answer="With the JeepNe ecosystem your local business is integrated as part of a hub of local businesses within the area. Depending on your business type, you gain additional features that enforce returning customers (such as points for Restaurants or coupons for Stores)"
      />
    </Box>
  );
}

export default FaqSection;
