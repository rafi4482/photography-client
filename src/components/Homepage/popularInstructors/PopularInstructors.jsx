import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

const IMAGE =
  "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";

const instructorsData = [
  {
    name: "John Doe",
    title: "Frontend Developer",
    followers: "23k",
  },
  {
    name: "Jane Smith",
    title: "Backend Developer",
    followers: "18k",
  },
  {
    name: "Jane Smith",
    title: "Backend Developer",
    followers: "18k",
  },
  {
    name: "Jane Smith",
    title: "Backend Developer",
    followers: "18k",
  },
  {
    name: "Jane Smith",
    title: "Backend Developer",
    followers: "18k",
  },
  {
    name: "Jane Smith",
    title: "Backend Developer",
    followers: "18k",
  },
  {
    name: "Jane Smith",
    title: "Backend Developer",
    followers: "18k",
  },
  {
    name: "Jane Smith",
    title: "Backend Developer",
    followers: "18k",
  },
  // Add more instructor data here
];

const PopularInstructors = () => {
  return (
    <Box>
      <Center m={6}>
        <Heading as="h2" size="xl">
          Popular Instructors
        </Heading>
      </Center>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 3, lg: 4, xl: 4 }}
        spacing={6}
        maxW="1200px"
        mx="auto"
      >
        {instructorsData.map((instructor, index) => (
          <Center key={index} py={6}>
            <Box
              maxW="270px"
              w="full"
              bg={useColorModeValue("white", "gray.800")}
              boxShadow="2xl"
              rounded="md"
              overflow="hidden"
            >
              <Image h="120px" w="full" src={IMAGE} objectFit="cover" alt="#" />
              <Flex justify="center" mt={-12}>
                <Avatar
                  size="xl"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  css={{
                    border: "2px solid white",
                  }}
                />
              </Flex>

              <Box p={6}>
                <Stack spacing={0} align="center" mb={5}>
                  <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
                    {instructor.name}
                  </Heading>
                  <Text color="gray.500">{instructor.title}</Text>
                </Stack>

                <Stack direction="row" justify="center" spacing={6}>
                  <Stack spacing={0} align="center">
                    <Text fontWeight={600}>{instructor.followers}</Text>
                    <Text fontSize="sm" color="gray.500">
                      Followers
                    </Text>
                  </Stack>
                  {/* Add more data for each instructor */}
                </Stack>

                <Button
                  w="full"
                  mt={8}
                  bg={useColorModeValue("#151f21", "gray.900")}
                  color="white"
                  rounded="md"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  Follow
                </Button>
              </Box>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PopularInstructors;
