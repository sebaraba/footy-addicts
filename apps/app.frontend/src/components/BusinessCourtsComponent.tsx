import { Box, Button, Container, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { createCourt, getCourtsByUserId } from "../services/courtsService";
import ModalComponent from "./Common/ModalComponent";
import validateForm from "../utils/formValidations";

type FormValues = {
	name: string;
	description: string;
	price: string;
	address: string;
};

const BusinessCourtsComponent = ({ user }: { user: { id: string } | null }) => {
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [courts, setCourts] = useState<any[]>([]);
	const [formValues, setFormValues] = useState<FormValues>({
		name: "",
		description: "",
		price: "",
		address: "",
	});
	const [formErrors, setFormErrors] = useState({} as any);;

	useEffect(() => {
		console.log(formErrors);
	}, [formErrors]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target as { name: keyof FormValues; value: string };

		if (name in formValues) {
			setFormValues((prev) => ({ ...prev, [name]: value }));
		}

		const fieldError = validateForm(name, value, formValues);
		console.log(fieldError);
		setFormErrors((prev: any) => ({ ...prev, [name]: fieldError }));
	};

	const handleSubmit = () => {
		const errors = Object.keys(formValues).reduce((acc, key) => {
			return { ...acc, [key]: validateForm(key, formValues[key as keyof FormValues], formValues) };
		}, {});

		setFormErrors(errors);

		if (Object.values(errors).every((error) => error === undefined)) {
			createCourt(user?.id, formValues)
			.then(() => {
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
			.catch(() => {
				toast({
					title: "Error creating court",
					description: "Failed to create court. Please try again later.",
					status: "error",
					duration: 5000,
					isClosable: true,
					position: "top",
				});
			});
		}
	};

	useEffect(() => {
		if (user?.id) {
			getCourtsByUserId(user.id)
				.then((response) => {
					setCourts(response.data as any);
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
				<FormControl mb={4} isInvalid={!!formErrors.name}>
					<FormLabel>Name</FormLabel>
					<Input id="name" name="name" placeholder="Enter name" value={formValues.name} onChange={handleChange} />
					<FormErrorMessage>{formErrors.name}</FormErrorMessage>
				</FormControl>
				<FormControl mb={4} isInvalid={!!formErrors.address}>
					<FormLabel>Address</FormLabel>
					<Input id="address" name="address" placeholder="Enter address" value={formValues.address} onChange={handleChange} />
					<FormErrorMessage>{formErrors.address}</FormErrorMessage>
				</FormControl>
				<FormControl mb={4} isInvalid={!!formErrors.description}>
					<FormLabel>Description</FormLabel>
					<Input id="description" name="description" placeholder="Enter description" value={formValues.description} onChange={handleChange} />
					<FormErrorMessage>{formErrors.description}</FormErrorMessage>
				</FormControl>
				<FormControl mb={2} isInvalid={!!formErrors.price}>
					<FormLabel>Price</FormLabel>
					<Input id="price" name="price" placeholder="Enter price" value={formValues.price} onChange={handleChange} />
					<FormErrorMessage>{formErrors.price}</FormErrorMessage>
				</FormControl>
			</ModalComponent>
		</>
	);
};

export default BusinessCourtsComponent;
