import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import ProtectedComponent from "./components/ProtectedComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <ProtectedComponent>
          <App />
        </ProtectedComponent>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
);
