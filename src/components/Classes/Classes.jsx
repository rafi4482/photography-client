import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

const popularClassesData = [
  {
    brand: "Brand 1",
    title: "Nice Chair, pink",
    price: "$57",
    discountedPrice: "$199",
  },
  {
    brand: "Brand 2",
    title: "Cozy Sofa, blue",
    price: "$89",
    discountedPrice: "$249",
  },
  {
    brand: "Brand 2",
    title: "Cozy Sofa, blue",
    price: "$89",
    discountedPrice: "$249",
  },
  {
    brand: "Brand 2",
    title: "Cozy Sofa, blue",
    price: "$89",
    discountedPrice: "$249",
  },
  {
    brand: "Brand 2",
    title: "Cozy Sofa, blue",
    price: "$89",
    discountedPrice: "$249",
  },
  {
    brand: "Brand 2",
    title: "Cozy Sofa, blue",
    price: "$89",
    discountedPrice: "$249",
  },
  {
    brand: "Brand 2",
    title: "Cozy Sofa, blue",
    price: "$89",
    discountedPrice: "$249",
  },
  {
    brand: "Brand 2",
    title: "Cozy Sofa, blue",
    price: "$89",
    discountedPrice: "$249",
  },
];

const Classes = () => {
  return (
    <Box>
      <Center m={6}>
        <Heading as="h2" size="xl">
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
              boxShadow="2xl"
              rounded="lg"
              pos="relative"
              zIndex={1}
            >
              <Box
                rounded="lg"
                mt={-12}
                pos="relative"
                height="230px"
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
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
              <Stack pt={10} align="center">
                <Text color="gray.500" fontSize="sm" textTransform="uppercase">
                  {data.brand}
                </Text>
                <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
                  {data.title}
                </Heading>
                <Stack direction="row" align="center">
                  <Text fontWeight={800} fontSize="xl">
                    {data.price}
                  </Text>
                  <Text textDecoration="line-through" color="gray.600">
                    {data.discountedPrice}
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Classes;
