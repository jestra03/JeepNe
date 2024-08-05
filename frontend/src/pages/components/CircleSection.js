import { Circle, Text } from "@chakra-ui/react";
import {
  primaryColor,
  accentOne,
  accentTwo,
  textColor1,
  textColor2,
} from "../../themeSettings";

export const CircleSection = ({ title, description }) => {
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
