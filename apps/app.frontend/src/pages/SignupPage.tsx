import { Box, Container } from "@chakra-ui/react";
import Signup from "../components/Authentication/Signup.tsx";
import { useLocation } from "react-router-dom";

const SignupPage = () => {
  const isAdmin = useLocation().pathname.slice(8) === "admin";

  return (
    <Container centerContent={true}>
      <Box w="300px">
        <Signup isAdmin={isAdmin} />
      </Box>
    </Container>
  );
};

export default SignupPage;
