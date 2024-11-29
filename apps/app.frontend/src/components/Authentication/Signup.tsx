import { Box, Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Signup = (props: any) => {
	const { isAdmin } = props;
	const navigate = useNavigate();
	const toast = useToast();
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
		phone: "",
		address: "",
		city: "",
		country: "",
		isAdmin: isAdmin,
	});
	const [formErrors, setFormErrors] = useState({} as any);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const validateField = (name: string, value: string) => {
		const errors: any = {};
	
		switch (name) {
			case "firstName":
				if (!value) errors.firstName = "First name is required";
				break;
			case "lastName":
				if (!value) errors.lastName = "Last name is required";
				break;
			case "email":
				if (!value || !/\S+@\S+\.\S+/.test(value))
					errors.email = "Invalid email address";
				break;
			case "password":
				if (!value || value.length < 6)
					errors.password = "Password must be at least 6 characters";
				break;
			case "confirmPassword":
				if (value !== formValues.password)
					errors.confirmPassword = "Passwords do not match";
				break;
			case "phone":
				if (!value || !/^\d{10,15}$/.test(value))
					errors.phone = "Phone number is invalid";
				break;
			case "address":
				if (!value) errors.address = "Address is required";
				break;
			case "city":
				if (!value) errors.city = "City is required";
				break;
			case "country":
				if (!value) errors.country = "Country is required";
				break;
			default:
				break;
		}
	
		return errors;
	};
	
	const handleChange = (e: any) => {
		const { name, value } = e.target;
	
		// Update form values
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	
		// Validate the field and update form errors
		const fieldErrors = validateField(name, value);
		setFormErrors((prevErrors: any) => ({
			...prevErrors,
			[name]: fieldErrors[name] || "",
		}));
	
		// Additional validation for `confirmPassword` if `password` changes
		if (name === "password" || name === "confirmPassword") {
			const confirmPasswordError = validateField(
				"confirmPassword",
				name === "password" ? formValues.confirmPassword : value
			);
			setFormErrors((prevErrors: any) => ({
				...prevErrors,
				confirmPassword: confirmPasswordError.confirmPassword || "",
			}));
		}
	};
	

	const validate = () => {
		const errors: any = {};
		for (const [name, value] of Object.entries(formValues)) {
			const fieldErrors = validateField(name, value as string);
			Object.assign(errors, fieldErrors);
		}
		return errors;
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const errors = validate();
		setFormErrors(errors);

		if (Object.keys(errors).length === 0) {
			setIsSubmitting(true);

			register(formValues)
				.then((response) => {
					toast({
						title: "Account Created",
						description: "Successfully created account. Please login.",
						status: "success",
						duration: 5000,
						isClosable: true,
						position: "top",
					});
					navigate('/login');
				})
				.catch((error) => {
					toast({
						title: "Account Creation Failed",
						description: "Failed to create account. Try again later.",
						status: "error",
						duration: 5000,
						isClosable: true,
						position: "top",
					});
				})
				.finally(() => setIsSubmitting(false));
		}
	};

	return (
		<Box as="form" onSubmit={handleSubmit} width="100%" maxWidth="800px" mx="auto">
			<HStack align="start" spacing={8}>
				{/* Column 1: Email, Password, Confirm Password */}
				<VStack spacing={4} align="stretch" flex="1">
					<FormControl isInvalid={formErrors.email}>
						<FormLabel htmlFor="email">Email</FormLabel>
						<Input
							id="email"
							name="email"
							type="email"
							value={formValues.email}
							onChange={handleChange}
						/>
						<FormErrorMessage>{formErrors.email}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={formErrors.password}>
						<FormLabel htmlFor="password">Password</FormLabel>
						<Input
							id="password"
							name="password"
							type="password"
							value={formValues.password}
							onChange={handleChange}
						/>
						<FormErrorMessage>{formErrors.password}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={formErrors.confirmPassword}>
						<FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
						<Input
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							value={formValues.confirmPassword}
							onChange={handleChange}
						/>
						<FormErrorMessage>{formErrors.confirmPassword}</FormErrorMessage>
					</FormControl>
				</VStack>

				{/* Column 2: Other Fields */}
				<VStack spacing={4} align="stretch" flex="1">
					<FormControl isInvalid={formErrors.firstName}>
						<FormLabel htmlFor="firstName">First Name</FormLabel>
						<Input
							id="firstName"
							name="firstName"
							type="text"
							value={formValues.firstName}
							onChange={handleChange}
						/>
						<FormErrorMessage>{formErrors.firstName}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={formErrors.lastName}>
						<FormLabel htmlFor="lastName">Last Name</FormLabel>
						<Input
							id="lastName"
							name="lastName"
							type="text"
							value={formValues.lastName}
							onChange={handleChange}
						/>
						<FormErrorMessage>{formErrors.lastName}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={formErrors.phone}>
						<FormLabel htmlFor="phone">Phone</FormLabel>
						<Input
							id="phone"
							name="phone"
							type="text"
							value={formValues.phone}
							onChange={handleChange}
						/>
						<FormErrorMessage>{formErrors.phone}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={formErrors.address}>
						<FormLabel htmlFor="address">Address</FormLabel>
						<Input
							id="address"
							name="address"
							type="text"
							value={formValues.address}
							onChange={handleChange}
						/>
						<FormErrorMessage>{formErrors.address}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={formErrors.city}>
						<FormLabel htmlFor="city">City</FormLabel>
						<Input
							id="city"
							name="city"
							type="text"
							value={formValues.city}
							onChange={handleChange}
						/>
						<FormErrorMessage>{formErrors.city}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={formErrors.country}>
						<FormLabel htmlFor="country">Country</FormLabel>
						<Input
							id="country"
							name="country"
							type="text"
							value={formValues.country}
							onChange={handleChange}
						/>
						<FormErrorMessage>{formErrors.country}</FormErrorMessage>
					</FormControl>
				</VStack>
			</HStack>

			<Button
				type="submit"
				colorScheme="blue"
				size="lg"
				width="100%"
				mt={6}
				isLoading={isSubmitting}
			>
				Register
			</Button>
		</Box>
	);
};

export default Signup;
