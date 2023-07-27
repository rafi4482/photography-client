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
} from "@chakra-ui/react";
import {
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
} from "../../firebase.config";
import toast, { Toaster } from "react-hot-toast";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword } = formFields;

  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      navigate("/"); // Redirect to homepage after successful sign-in
    } catch (error) {
      console.log("Google sign-in failed", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match. Please try again.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
      return;
    }

    // Password validation using regex to check for capital letter and special character
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password should contain at least one capital letter and one special character."
      );
      return;
    }

    try {
      // Check if the email already exists
      const userExists = await isUserExists(email);
      if (userExists) {
        toast.error("Email already exists. Please use a different email.");
        return;
      }

      // Proceed with user registration
      await createAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/"); // Redirect to homepage after successful registration
    } catch (error) {
      console.log("Registration failed", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const isUserExists = async (email) => {
    // Your implementation to check if the email exists in Firebase
    // For example: Use Firebase's `fetchSignInMethodsForEmail` to check if email is registered
    try {
      const methods = await firebase.auth().fetchSignInMethodsForEmail(email);
      return methods.length > 0;
    } catch (error) {
      console.log("Error checking user existence:", error);
      return false;
    }
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
          <Heading fontSize={"4xl"}>Sign up</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
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
              <FormControl id="confirmPassword">
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10} pt={6}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
                <Button
                  bg={"green.600"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                  onClick={signInWithGoogle}
                >
                  Continue with Google
                </Button>
              </Stack>
            </form>
            <Stack pt={6}>
              <Text align={"center"}>
                Already have an account?{" "}
                <Link to="/login" color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Toaster />
    </Flex>
  );
};

export default Register;
