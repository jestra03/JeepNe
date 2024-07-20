// src/pages/ChecklistTypeSection.js
import React, { useState } from 'react';
import { Box, Button, Flex, VStack, Text } from '@chakra-ui/react';

const businessTypes = [
  {
    type: 'Restaurant',
    description: 'Maximize your profits by choosing our Restaurant Business Plan. Commission-free ordering, responsive delivery system that works with your POS system connecting you and the Customer.',
    checklist: [
      'Carryout Solution',
      'Delivery Solution',
      'Point of Sale (POS) Integrations',
      'Commission Free Transactions',
      'Customized Website',
      'Advertisements',
      'SEO',
      'Video & Photo editing'
    ]
  },
  {
    type: 'Store',
    description: 'Increase your retail reach with our Store Business Plan. Enjoy commission-free transactions, a seamless inventory system integration, and a customized website that highlights your unique products.',
    checklist: [
      'Inventory Management',
      'Online Ordering',
      'POS Integration',
      'Commission Free Transactions',
      'Custom Website Design',
      'Marketing Tools',
      'SEO Optimization',
      'Visual Media Production'
    ]
  },
  {
    type: 'Service Provider',
    description: 'Optimize your service offerings with our Service Provider Business Plan. Gain access to streamlined client scheduling, customized service pages, and tools to manage bookings and inquiries.',
    checklist: [
      'Client Scheduling',
      'Booking Management',
      'Custom Service Pages',
      'Commission Free Transactions',
      'Customizable Website',
      'Client Communication Tools',
      'SEO Services',
      'Professional Media Content'
    ]
  }
];

const ChecklistItem = ({ children }) => (
  <Flex align="center">
    <Box as="span" size="6" mr={2} color="green.500">&#10003;</Box>
    <Text fontSize="lg">{children}</Text>
  </Flex>
);

const ChecklistTypeSection = () => {
  const [businessType, setBusinessType] = useState('Restaurant');

  const selectedType = businessTypes.find(bt => bt.type === businessType);

  return (
    <Flex direction="column" align="center" justify="center" textAlign="center">
      {/* Buttons Container */}
      <Flex direction="row" wrap="wrap" justify="center" mb={6}>
        {businessTypes.map(bt => (
          <Button
            key={bt.type}
            variant="outline"
            m={2}
            onClick={() => setBusinessType(bt.type)}
          >
            {bt.type}
          </Button>
        ))}
      </Flex>

      {/* Content Container */}
      <Box width="80%" maxW="800px">
        {selectedType && (
          <VStack spacing={4} align="start">
            <Text fontSize="lg">{selectedType.description}</Text>
            <VStack spacing={2} align="start">
              {selectedType.checklist.map((item, index) => (
                <ChecklistItem key={index}>{item}</ChecklistItem>
              ))}
            </VStack>
          </VStack>
        )}
      </Box>
    </Flex>
  );
};

export default ChecklistTypeSection;
