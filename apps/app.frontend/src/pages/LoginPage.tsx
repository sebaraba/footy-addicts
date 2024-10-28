import { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await login({ email, password });
      // Redirect to protected page
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <Container centerContent={true}>
      <Heading size="2xl">Login</Heading>
      <Text>If you don't have an account, click here to register.</Text>
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="john.doe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button size="lg" w="full" colorScheme="blue" onClick={handleSubmit}>
          Login
        </Button>
        <Link color="blue.500" onClick={() => navigate("/register")}>
          Don't have an account? Register here.
        </Link>
      </VStack>
    </Container>
  );
};

export default LoginPage;
