import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from "../../firebase.config";
import toast, { Toaster } from "react-hot-toast";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [user, setUser] = useState(null); // Store the authenticated user object

  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      navigate("/"); // Redirect to homepage after successful sign-in
    } catch (error) {
      toast.error("Google sign-in failed. Please try again.");
      console.log("Google sign-in failed", error);
    }
  };

  const handleSignInWithEmailAndPassword = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/"); // Redirect to homepage after successful email/password sign-in
    } catch (error) {
      toast.error("Sign-in failed. Please check your email and password.");
      console.log("User sign-in failed", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      setUser(null);
    } catch (error) {
      console.log("User sign-out failed", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            {/* Add your text here */}
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSignInWithEmailAndPassword}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  type="submit"
                  marginTop={6}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
                <Button
                  bg={"green.600"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                  onClick={handleSignInWithGoogle}
                >
                  Sign in with Google
                </Button>
              </Stack>
            </form>
            <Stack pt={6}>
              <Text align={"center"}>
                Don't have an account?{" "}
                <Link to="/register" color={"blue.400"}>
                  Register
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Toaster position="top-center" reverseOrder={false} />
    </Flex>
  );
};

export default Login;
