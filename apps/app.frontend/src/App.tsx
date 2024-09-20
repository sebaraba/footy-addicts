import { Flex } from "@chakra-ui/react";
import { RegistrationForm } from "./components/RegistrationForm.tsx";

export const App = () => (
  <>
    {/*<header style={{ width: "100%", position: "fixed" }}>*/}
    {/*  <h1>Header</h1>*/}
    {/*</header>*/}
    <Flex
      py={[0, 10, 20]}
      direction={{ base: "column-reverse", md: "row" }}
      margin="0 auto"
    >
      <RegistrationForm />
    </Flex>
    {/*<LargeWithAppLinksAndSocial />*/}
  </>
);
