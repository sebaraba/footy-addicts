import { Routes, Route } from "react-router-dom";
import { Container, Flex } from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import NewRegistrationPage from "./pages/NewRegistrationPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

export const App = () => (
  <Container maxW="100vw" w="100%" padding={0}>
    <Header />
    <Flex py={[0, 10, 20]} direction={{ base: "column-reverse", md: "row" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/new-register" element={<NewRegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Flex>
    <Footer />
  </Container>
);
