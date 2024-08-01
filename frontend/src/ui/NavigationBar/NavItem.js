import React from "react";
import { Flex, Text, Icon, Link } from "@chakra-ui/react";
import { accentTwo } from "../../themeSettings";

export default function NavItem({
  icon,
  title,
  active,
  navSize,
  onClick,
  textColor,
}) {
  return (
    <Link
      backgroundColor={active && accentTwo}
      p={{ base: 1, sm: 3 }}
      borderRadius={8}
      _hover={{ textDecor: "none", backgroundColor: accentTwo }}
      onClick={onClick}
    >
      <Flex flexDir="column" alignItems="center">
        <Icon as={icon} fontSize="20px" color={textColor} />
        <Text
          mt={2}
          display={navSize === "small" ? "none" : ""}
          color={textColor}
        >
          {title}
        </Text>
      </Flex>
    </Link>
  );
}
