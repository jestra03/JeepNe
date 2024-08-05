import React from "react";
import { Box, Circle, Text, Flex, Image, VStack } from "@chakra-ui/react";
import { accentTwo, textColor2 } from "../themeSettings";
import { motion } from "framer-motion";

function AboutPage() {
  const TeamMember = ({ memberInfo }) => {
    return (
      <Circle
        bg={accentTwo}
        width={{ base: "50vw", md: "450px" }}
        height={{ base: "50vw", md: "450px" }}
        flexDir="column"
        p={10}
        m={1}
      >
        <Circle
          width={{ base: "20vw", md: "250px" }}
          height={{ base: "20vw", md: "250px" }}
          overflow="hidden"
        >
          <Image
            src={memberInfo.pictureLocation}
            alt={memberInfo.name}
            width="100%"
            height="100%"
          />
        </Circle>
        <Text fontWeight="bold" fontSize={{ base: "0.8rem", md: "2rem" }}>
          {memberInfo.name}
        </Text>
        <Box fontSize={{ base: "0.6rem", md: "1rem" }}>
          <Text>{memberInfo.role}</Text>
          <Text>{memberInfo.desc}</Text>
          <Text>{memberInfo.linkedin}</Text>
        </Box>
      </Circle>
    );
  };

  const team = [
    {
      name: "Joshua",
      role: "Full Stack Developer",
      desc: "skibbidi",
      linkedin: "mylink.com",
      pictureLocation: "/Joshua.png",
    },
    {
      name: "Karan",
      role: "Full Stack Developer",
      desc: "hennessey",
      linkedin: "yeya",
      pictureLocation: "/Karan.webp",
    },
  ];

  return (
    <VStack
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      height="100%"
      marginTop={100}
      justify="space-around"
      p={0}
    >
      <Text fontSize={{ base: "3rem", lg: "5rem" }} fontColor={textColor2}>
        Meet The Team
      </Text>
      <Flex
        width="100%"
        align="center"
        justify="space-around"
        flexDir={{ base: "column", lg: "row" }}
      >
        {team.map((teamMember, key) => (
          <TeamMember key={key} memberInfo={teamMember} />
        ))}
      </Flex>
    </VStack>
  );
}

export default AboutPage;
