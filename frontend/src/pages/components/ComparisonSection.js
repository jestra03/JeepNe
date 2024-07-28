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
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: "0%", transition: { duration: 1 } }}
      exit={{ opacity: 0, y: "50%" }}
    >
      <Table
        variant="unstyled"
        key={features}
        as={motion.div}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0 }}
      >
        <Thead>
          <Tr>
            <Th></Th>
            <Th></Th>
            {Object.keys(data).map((key) => (
              <Th textAlign="center">
                <Text m={1} fontSize="1.4rem">
                  {key}
                </Text>
                <Text fontWeight="400" fontSize="1rem">
                  {prices[key]}
                </Text>
              </Th>
            ))}
          </Tr>
          <Tr>
            <Th bg={accentTwo} fontWeight="100">
              Features
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {features.map((feature, index) => (
            <Tr>
              <Td bg={accentTwo}>{feature}</Td>
              <Td></Td>
              {Object.entries(data).map(([_, dataObject]) => (
                <Th>
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
    </Box>
  );
}

export default ComparisonSection;
