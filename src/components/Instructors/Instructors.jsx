import React from "react";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  SimpleGrid, // Add SimpleGrid from Chakra UI
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const data = [
  // Create an array of card data, you can add more objects here to create more cards
  {
    isNew: true,
    imageURL:
      "https://images.pexels.com/photos/7752812/pexels-photo-7752812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
];

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}
function Instructors() {
  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} // Display 1 card on small, 2 on medium, and 3 on large and extra-large screens
        spacing={8} // Adjust spacing between cards as needed
        width="full"
      >
        {data.map((item, index) => (
          <Box
            key={index}
            bg={useColorModeValue("white", "gray.800")}
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
            overflow="hidden"
          >
            {item.isNew && (
              <Circle
                size="10px"
                position="absolute"
                top={2}
                right={2}
                bg="red.200"
              />
            )}

            <Image
              src={item.imageURL}
              alt={`Picture of ${item.name}`}
              roundedTop="lg"
            />

            <Box
              p="2"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                p="8"
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                textAlign="center"
              >
                {item.name}
              </Box>

              <Flex
                justifyContent="space-between"
                alignContent="center"
                width="100%"
              >
                <Rating rating={item.rating} numReviews={item.numReviews} />
                <Box
                  fontSize="2xl"
                  color={useColorModeValue("gray.800", "white")}
                >
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    a@gmail.com
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
export default Instructors;
