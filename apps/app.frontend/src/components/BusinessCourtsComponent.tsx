import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { createCourt, getCourtsByUserId } from "../services/courtsService";
import ModalComponent from "./Common/ModalComponent";

const BusinessCourtsComponent = ({ user }: { user: { id: string } | null }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [courts, setCourts] = useState<any[]>([]);
  const [formValues, setFormValues] = useState({ name: "", description: "", price: "", address: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormValues({ ...formValues, [e.target.id]: e.target.value });

  const handleSubmit = () => {
    console.log("Form submitted with values:", formValues);
    createCourt(user?.id, formValues)  
        .then((response) => {
            getCourtsByUserId(user?.id)
                .then((response) => {
                console.log("Fetched courts:", response);
                setCourts(response as any);
                })
                .catch(() => {
                setCourts([]);
                toast({
                    title: "Error loading data",
                    description: "Failed to fetch courts. Please try again later.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                });
                });
            onClose();
        })
        .catch();
  };

  useEffect(() => {
    if (user?.id) {
      getCourtsByUserId(user.id)
        .then((response) => {
          console.log("Fetched courts:", response);
          setCourts(response as any);
        })
        .catch(() => {
          setCourts([]);
          toast({
            title: "Error loading data",
            description: "Failed to fetch courts. Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        });
    }
  }, [user, toast]);

  return (
    <>
      <Container>
        <Box>
          <Flex bg="gray.100" px={6} py={4} align="center" justify="space-between" boxShadow="sm">
            <Heading size="md">Courts</Heading>
            <Button colorScheme="brand" onClick={onOpen}>+</Button>
          </Flex>

          {courts.length > 0 ? (
            <Box mt={4}>
              {courts.map((court) => (
                <Box key={court.id} p={4} borderWidth="1px" borderRadius="lg">
                  {court.name}
                </Box>
              ))}
            </Box>
          ) : (
            <Box textAlign="center" mt={4}>
              No courts found.
              <Flex justify="center" align="center" mt={4}>
                <Button colorScheme="brand" onClick={onOpen}>Add court</Button>
              </Flex>
            </Box>
          )}
        </Box>
      </Container>

      <ModalComponent isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} title="Add New Court">
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter name" value={formValues.name} onChange={handleChange} />
        </FormControl>
        <FormControl id="description" mb={4}>
          <FormLabel>Description</FormLabel>
          <Input placeholder="Enter description" value={formValues.description} onChange={handleChange} />
        </FormControl>
        <FormControl id="price" mb={4}>
          <FormLabel>Price</FormLabel>
          <Input placeholder="Enter price" value={formValues.price} onChange={handleChange} />
        </FormControl>
        <FormControl id="address">
          <FormLabel>Address</FormLabel>
          <Input placeholder="Enter address" value={formValues.address} onChange={handleChange} />
        </FormControl>
      </ModalComponent>
    </>
  );
};

export default BusinessCourtsComponent;
