import { useState } from "react";
import {
  VStack,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  SimpleGrid,
  useBreakpointValue,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { createCustomer } from "../services/customerService";

const NewRegistrationPage = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("usa");
  const [email, setEmail] = useState(""); // State for Email
  const [phone, setPhone] = useState(""); // State for Phone Number

  const handleSubmit = async () => {
    const customerData = {
      firstName,
      lastName,
      address,
      city,
      country,
      email,
      phone,
    };

    console.log("Customer data:", customerData);

    try {
      const response = await createCustomer(customerData);
      console.log("Customer created:", response.data);
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  return (
    <Container centerContent={true}>
      <Heading size="2xl">Your details</Heading>
      <Text>If you already have an account, click here to log in.</Text>
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                placeholder="0722789012"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                placeholder="Blvd. Broken Dreams 21"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                placeholder="San Francisco"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="usa">United States of America</option>
                <option value="uae">United Arab Emirates</option>
                <option value="nmk">North Macedonia</option>
                <option value="de">Germany</option>
              </Select>
            </FormControl>
          </GridItem>

          {/*<GridItem colSpan={2}>*/}
          {/*  <Checkbox*/}
          {/*    isChecked={shipToBilling}*/}
          {/*    onChange={(e) => setShipToBilling(e.target.checked)}*/}
          {/*  >*/}
          {/*    Ship to billing address.*/}
          {/*  </Checkbox>*/}
          {/*</GridItem>*/}

          <GridItem colSpan={2}>
            <Button
              size="lg"
              w="full"
              colorScheme="blue"
              onClick={handleSubmit}
            >
              Register
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default NewRegistrationPage;
