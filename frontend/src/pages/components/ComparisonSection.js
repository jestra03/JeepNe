import React from "react";
import {
  VStack,
  Text,
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";
import { accentOne, accentTwo, primaryColor } from "../../themeSettings";
import { motion } from "framer-motion";

/* features: An array of the features to be compared.
   data: An array which contains the objects whos features will be compared.
   The objects in the data array will have an array with true or false for each of the features.
*/
function ComparisonSection({ features, data, prices }) {
  if (features === null || data === null) {
    return;
  }

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
      >
        <Table
          size={{
            base: "xs",
            sm: "sm",
            md: "md",
          }}
          key={features}
        >
          <Thead>
            <Tr>
              <Th fontWeight="100" fontSize={{ base: "0.7rem", sm: "1rem" }}>
                Features
              </Th>
              {Object.keys(data).map((key) => (
                <Th key={key} textAlign="center">
                  <Text m={1} fontSize={{ base: "1rem", sm: "1.4rem" }}>
                    {key}
                  </Text>
                  <Text fontWeight="400" fontSize="1rem">
                    {prices[key]}
                  </Text>
                  <Button
                    bg={accentTwo}
                    color={accentOne}
                    fontSize={{ base: "0.5rem", sm: "0.7rem" }}
                    m={1}
                    p={1}
                    height={{ base: "1rem", sm: "2rem" }}
                    _hover={{
                      backgroundColor: primaryColor,
                    }}
                  >
                    Explore
                  </Button>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {features.map((feature, index) => (
              <Tr key={index}>
                <Td key={index} fontSize={{ base: "0.7rem", sm: "1rem" }}>
                  {feature}
                </Td>
                {Object.entries(data).map(([key, dataObject]) => (
                  <Th key={key}>
                    <Text
                      align="center"
                      color={dataObject[index] === true ? "green" : "red"}
                    >
                      {dataObject[index] === true ? "✓" : "✗"}
                    </Text>
                  </Th>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </motion.div>
    </Box>
  );
}

export default ComparisonSection;
