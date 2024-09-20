import { Routes, Route } from "react-router-dom";
import { Container, Flex } from "@chakra-ui/react";
import { LargeWithAppLinksAndSocial } from "./components/Footer.tsx";
import HomePage from "./pages/HomePage.tsx";
import RegistrationForm from "./pages/RegistrationForm.tsx";

export const App = () => (
  <Container maxW="100vw" w="100%" padding={0}>
    <header style={{ width: "100%", position: "fixed" }}>
      <h1>Header</h1>
    </header>
    <Flex
      h="100vh"
      py={[0, 10, 20]}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Flex>
    <LargeWithAppLinksAndSocial />
  </Container>
);
