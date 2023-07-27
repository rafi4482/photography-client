import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Heading as="h1" size="xl" mb={4}>
        404 - Not Found
      </Heading>
      <Text fontSize="lg">The page you are looking for does not exist.</Text>
    </Box>
  );
};

export default NotFoundPage;
