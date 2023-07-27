import React from "react";
import { Box, Image, Flex, useColorModeValue } from "@chakra-ui/react";

const ImageGallery = () => {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",

    // Add more image URLs here
  ];

  return (
    <Flex wrap="wrap" justify="center">
      {images.map((url, index) => (
        <Box
          key={index}
          p={2}
          transition="transform 0.2s, border 0.2s"
          _hover={{
            transform: "scale(1.05)",
            border: "2px solid #48BB78",
          }}
        >
          <Image
            src={url}
            alt={`Image ${index + 1}`}
            width="250px"
            height="250px"
            objectFit="cover"
            borderRadius="md"
            boxShadow="lg"
          />
        </Box>
      ))}
    </Flex>
  );
};

export default ImageGallery;
