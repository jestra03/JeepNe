import React from 'react';
import { Flex, Text, Icon, Link } from '@chakra-ui/react';

export default function NavItem({ icon, title, description, active, navSize, onClick, textColor }) {
    return (
        <Link
            backgroundColor={active && "#AEC8CA"}
            p={3}
            borderRadius={8}
            _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
            onClick={onClick}
        >
            <Flex flexDir="column" alignItems="center">
                <Icon as={icon} fontSize="xl" color={textColor} />
                <Text mt={2} display={navSize === "small" ? "none" : "block"} color={textColor}>
                    {title}
                </Text>
            </Flex>
        </Link>
    );
}
