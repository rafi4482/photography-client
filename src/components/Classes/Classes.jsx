import React, { useContext } from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

const popularClassesData = [
  {
    brand: "Brand 1",
    title: "JOURNAL",
    price: "$57",
    discountedPrice: "$199",
    availableSeats: 0,
  },
  {
    brand: "Brand 1",
    title: "JOURNAL",
    price: "$57",
    discountedPrice: "$199",
    availableSeats: 10,
  },
  // Add more data for other classes
];

const Classes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Box>
      <Center m={6}>
        <Heading as="h4" size="xl">
          Popular Classes
        </Heading>
      </Center>

      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 3, lg: 4, xl: 4 }}
        spacing={10}
      >
        {popularClassesData.map((data, index) => (
          <Center key={index} py={12}>
            <Box
              role="group"
              p={6}
              maxW="330px"
              w="full"
              bg={useColorModeValue("white", "gray.800")}
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "gray.600")}
              borderRadius="xl"
              overflow="hidden"
              boxShadow="lg"
            >
              <Box
                rounded="lg"
                mt={-12}
                pos="relative"
                height="230px"
                overflow="hidden"
                _after={{
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 0,
                  left: 0,
                  backgroundImage: `url(${IMAGE})`,
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded="lg"
                  height={230}
                  width={282}
                  objectFit="cover"
                  src={IMAGE}
                  alt="#"
                />
              </Box>
              <Stack p={2} pt={10} align="center">
                <Heading fontSize="2xl" fontFamily="body" fontWeight={600}>
                  {data.title}
                </Heading>
                <Text p={2} fontWeight={600} fontSize="md">
                  Instructor: John Doe
                </Text>
                <Text fontWeight={600} fontSize="md">
                  Available seats: {data.availableSeats}
                </Text>
                <Stack direction="row" align="center" spacing={1} mt={2}>
                  <Text fontWeight={800} fontSize="lg">
                    {data.price}
                  </Text>
                  <Text
                    textDecoration="line-through"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    {data.discountedPrice}
                  </Text>
                </Stack>
                {isLoggedIn ? (
                  <Button
                    mt={4}
                    colorScheme={data.availableSeats === 0 ? "red" : "teal"}
                    size="md"
                    fontWeight={600}
                    _focus={{ outline: "none" }}
                    _hover={{
                      bg: data.availableSeats === 0 ? "red.600" : "teal.600",
                    }}
                    _active={{
                      bg: data.availableSeats === 0 ? "red.700" : "teal.700",
                    }}
                    isDisabled={data.availableSeats === 0 || !isLoggedIn}
                    onClick={() => console.log("Select button clicked")}
                  >
                    {data.availableSeats === 0
                      ? "No available seats"
                      : isLoggedIn
                      ? "Select"
                      : "Log in to select"}
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button
                      mt={4}
                      colorScheme="teal"
                      size="md"
                      fontWeight={600}
                      _focus={{ outline: "none" }}
                      _hover={{ bg: "teal.600" }}
                      _active={{ bg: "teal.700" }}
                      isDisabled={data.availableSeats === 0}
                    >
                      {data.availableSeats === 0
                        ? "No available seats"
                        : "Select"}
                    </Button>
                  </Link>
                )}
              </Stack>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Classes;
