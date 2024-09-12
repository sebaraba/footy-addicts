import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { ChakraProvider, Container } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <Container maxWidth="container.xl" padding={0}>
        <App />
      </Container>
    </ChakraProvider>
  </StrictMode>,
);
