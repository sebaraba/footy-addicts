import { Box, useColorModeValue } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box
      as="header"
      w="full"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      width={"100%"}
      p={4}
    >
      <h1>Header</h1>
    </Box>
  );
};
