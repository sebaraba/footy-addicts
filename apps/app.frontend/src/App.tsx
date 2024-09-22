import { Routes, Route } from "react-router-dom";
import { Container, Flex } from "@chakra-ui/react";
import { Footer } from "./components/Footer.tsx";
import { Header } from "./components/Header.tsx";
import HomePage from "./pages/HomePage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";

export const App = () => (
  <Container maxW="100vw" w="100%" padding={0}>
    <Header />
    <Flex py={[0, 10, 20]} direction={{ base: "column-reverse", md: "row" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Flex>
    <Footer />
  </Container>
);
