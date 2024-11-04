import { Button, FormControl, FormLabel, Image, Input, Link } from "@chakra-ui/react";
import { useState } from "react";
import logo from "../../assets/logo_nostroke.svg";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Login = (props: any) => {
	const { setIsAuthenticated } = props;
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = () => {
		login({ email, password })
			.then((response) => {
				localStorage.setItem('token', response.data.token);
				setIsAuthenticated(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<Image src={logo} alt="logo" boxSize={"300px"} mb={2} />

			<FormControl my={2}>
				<FormLabel>Email</FormLabel>
				<Input
					placeholder="john.doe@example.com"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormControl>
			<FormControl my={2} >
				<FormLabel>Password</FormLabel>
				<Input 
					type="password"
					placeholder="********"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</FormControl>

			<Button size="lg" mt={4} w="full" colorScheme="brand" onClick={handleSubmit}>Login</Button>
			<Link color="blue.500" m={2} onClick={() => navigate("/register")}>
				Don't have an account? Register here.
			</Link>
		</>
	);

};

export default Login;