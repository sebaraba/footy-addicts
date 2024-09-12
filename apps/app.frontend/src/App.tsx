import { Container, Flex } from "@chakra-ui/react";
import { RegistrationForm } from "./components/RegistrationForm.tsx";
import { LargeWithAppLinksAndSocial } from "./components/Footer.tsx";

export const App = () => (
  <Container w="100vw" padding={0}>
    <header style={{ width: "100%", position: "fixed" }}>
      <h1>Header</h1>
    </header>
    <Flex
      h="100vh"
      py={[0, 10, 20]}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <RegistrationForm />
    </Flex>
    <LargeWithAppLinksAndSocial />
  </Container>
);
