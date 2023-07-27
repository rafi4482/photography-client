import React from "react";
import { Box, Flex, Link, Text, Icon, Divider } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" p={4} bg="gray.300" color="black">
      <Flex direction="column" align="center" justify="center">
        <Text fontSize="lg">Stay Connected</Text>
        <Flex mt={2}>
          <Link href="#" mx={2}>
            Twitter
          </Link>
          <Link href="#" mx={2}>
            Facebook
          </Link>
          <Link href="#" mx={2}>
            Instagram
          </Link>
        </Flex>
        <Text fontSize="sm">
          &copy; 2023 Your Company. Made with{" "}
          <Icon as={FaHeart} color="red.500" /> in your city.
        </Text>
        <Text fontSize="sm" mt={2}>
          Privacy Policy | Terms of Service | Contact Us
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
