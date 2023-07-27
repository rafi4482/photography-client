import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Avatar,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Menu, ExitToApp, AccountCircle } from "@mui/icons-material"; // Import Material-UI icons
import { signInWithGooglePopup, signOutUser } from "../../../firebase.config";

const Navigation = ({ user }) => {
  const { isOpen, onToggle } = useDisclosure();

  // Function to handle the sign-out process
  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const navigate = useNavigate();

  return (
    <Box as="nav" bg="gray.800" color="white" p={4}>
      <Flex
        align="center"
        justify="space-between"
        wrap={{ base: "wrap", md: "nowrap" }}
      >
        <Box>
          <Link as={RouterLink} to="/" fontSize="2xl" fontWeight="bold">
            LOGO
          </Link>
        </Box>
        {/* Hamburger icon for mobile */}
        <IconButton
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          icon={<Menu />}
          variant="outline"
          borderRadius="md"
        />
        <Flex
          as="ul"
          listStyleType="none"
          align={{ base: "center", md: "center" }}
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          mt={{ base: 4, md: 0 }}
          flexWrap="wrap"
          w={{ base: "full", md: "auto" }}
          justify={{ base: "center", md: "flex-end" }}
        >
          {/* Add your navigation items here */}
          <NavItem to="/">Home</NavItem>
          <NavItem to="/classes">Classes</NavItem>
          <NavItem to="/instructors">Instructors</NavItem>
        </Flex>
        <Flex align="center">
          {user ? (
            <>
              <Button m={2} onClick={() => navigate("/dashboard")}>
                Dashboard
              </Button>
              <IconButton
                colorScheme="green"
                variant="outline"
                mr={4}
                onClick={handleSignOut}
                icon={<ExitToApp />}
              />
              <Avatar size="sm" src={user.photoURL} alt="Avatar" />
            </>
          ) : (
            <IconButton
              colorScheme="green"
              variant="outline"
              mr={4}
              icon={<AccountCircle />}
              as={user ? undefined : RouterLink} // Use Link only if user is not signed in
              to="/login"
            />
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

const NavItem = ({ to, children }) => (
  <Box
    as="li"
    mx={{ base: 2, md: 4 }}
    mb={{ base: 2, md: 0 }}
    display={{ base: "block", md: "inline-block" }}
  >
    <Link
      as={RouterLink}
      to={to}
      color="white"
      _hover={{ color: "gray.200" }}
      p={{ base: 2, md: 4 }}
      borderRadius="md"
    >
      {children}
    </Link>
  </Box>
);

export default Navigation;
