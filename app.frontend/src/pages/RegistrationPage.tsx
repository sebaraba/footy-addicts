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
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await register({ email, password });
      // Redirect to login page
      navigate("/login");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <Container centerContent={true}>
      <Heading size="2xl">Register</Heading>
      <Text>If you already have an account, click here to log in.</Text>
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
          Register
        </Button>
        <Link color="blue.500" onClick={() => navigate("/login")}>
          Already have an account? Login here.
        </Link>
      </VStack>
    </Container>
  );
};

export default RegistrationPage;
