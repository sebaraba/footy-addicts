import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, HStack, Image, Input, Link, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_nostroke.svg";
import validateForm from "../../utils/formValidations";

type FormValues = {
	email: string;
	password: string;
	confirmPassword: string;
	firstName: string;
	lastName: string;
	phone: string;
	address: string;
	city: string;
	country: string;
	isAdmin: boolean;
  };

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
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
	  
		setFormValues((prevValues) => ({
		  ...prevValues,
		  [name]: value,
		}));
	  
		let fieldError = validateForm(name, value, formValues);
		let fieldErrors = {	[name]: fieldError	};
		if (name === "password" || name === "confirmPassword") {
			let confirmPasswordError = validateForm("confirmPassword", name === "confirmPassword" ? value : formValues.confirmPassword, {
				...formValues,
				[name]: value,
			})

			fieldErrors.confirmPassword = confirmPasswordError;
		}
	  
		setFormErrors((prevErrors: any) => ({
		  ...prevErrors,
		  ...fieldErrors,
		}));
	  };
	  
	  const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	  
		const errors = Object.keys(formValues).reduce((acc, key) => {
			return { ...acc, [key]: validateForm(key, formValues[key as keyof FormValues], formValues) };
		  }, {});
	  
		setFormErrors(errors);
		console.log(errors);
	  
		if (Object.values(errors).every((error) => error === undefined)) {
		  setIsSubmitting(true);
	  
		  register(formValues)
			.then(() => {
			  toast({
				title: "Account Created",
				description: "Successfully created account. Please login.",
				status: "success",
				duration: 5000,
				isClosable: true,
				position: "top",
			  });
			  navigate("/login");
			})
			.catch(() => {
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

	const handleLoginRedirect = () => {
		navigate("/login");
	};

	return (
		<Box as="form" onSubmit={handleSubmit} w="500px" maxWidth="800px" mx="auto">
			<Image src={logo} alt="logo" boxSize={"300px"} mx="auto" />
			<HStack align="start" spacing={6} mt={-14}>
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
				colorScheme="brand"
				size="lg"
				width="100%"
				mt={6}
				isLoading={isSubmitting}
			>
				Sign Up
			</Button>
			<Link 
			color="blue.500" 
			onClick={handleLoginRedirect}
			textAlign="center"
			display="block" >
				You already have an account? Login here.
			</Link>
		</Box>
	);
};

export default Signup;
