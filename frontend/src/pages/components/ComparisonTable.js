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

/* features: An array of the features to be compared.
   data: An array which contains the objects whos features will be compared.
   The objects in the data array will have an array with true or false for each of the features.
*/
function ComparisonSection({ features, data }) {
  if (features === null || data === null) {
    return;
  }

  return (
    <Box>
      <Table>
        <Thead>
          <Tr>
            <Th bg={accentTwo} fontWeight="100">
              Features
            </Th>
            <Th></Th>
            {Object.keys(data).map((key) => (
              <Th>{key}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {features.map((feature, index) => (
            <Tr>
              <Td bg={accentTwo}>{feature}</Td>
              <Td></Td>
              {Object.entries(data).map(([key, dataObject]) => (
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
