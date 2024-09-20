import {
  VStack,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  SimpleGrid,
  useBreakpointValue,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";

const RegistrationForm = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <Container centerContent={true}>
      <Heading size="2xl">Your details</Heading>
      <Text>If you already have an account, click here to log in.</Text>
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="John" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Doe" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Blvd. Broken Dreams 21" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input placeholder="San Francisco" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Select>
                <option value="usa">United States of America</option>
                <option value="uae">United Arab Emirates</option>
                <option value="nmk">North Macedonia</option>
                <option value="de">Germany</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <Checkbox defaultChecked>Ship to billing address.</Checkbox>
          </GridItem>

          <GridItem colSpan={2}>
            <Button size="lb" w="full">
              Place Order
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default RegistrationForm;
