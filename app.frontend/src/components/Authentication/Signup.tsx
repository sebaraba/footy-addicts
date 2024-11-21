import { Button, FormControl, FormLabel, Image, Input, Link } from "@chakra-ui/react";
import { useState } from "react";
import logo from "../../assets/logo_nostroke.svg";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    
    const navigate = useNavigate();
    const handleSubmit = () => {

        register({ email, password, username, fullName, phone, address, city, country})
            .then((response) => {
                localStorage.setItem('token', response.data.token);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (
		<>
			<Image src={logo} alt="logo" boxSize={"300px"}/>

			
            <FormControl>
				<FormLabel>Full Name</FormLabel>
				<Input
					placeholder="John Doe"
					onChange={(e) => setFullName(e.target.value)}
				/>
			</FormControl>

            <FormControl my={2}>
				<FormLabel>Email</FormLabel>
				<Input
					placeholder="john.doe@example.com"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormControl>

			<FormControl my={2}>
				<FormLabel>Usernmae</FormLabel>
				<Input
					placeholder="john.doe@example.com"
					onChange={(e) => setUsername(e.target.value)}
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

            <FormControl my={2}>
				<FormLabel>Phone</FormLabel>
				<Input
					placeholder="07xxxxxxx"
					onChange={(e) => setPhone(e.target.value)}
				/>
			</FormControl>

            <FormControl my={2}>
				<FormLabel>Address</FormLabel>
				<Input
					onChange={(e) => setAddress(e.target.value)}
				/>
			</FormControl>

            <FormControl my={2}>
				<FormLabel>City</FormLabel>
				<Input
					onChange={(e) => setCity(e.target.value)}
				/>
			</FormControl>

            <FormControl my={2}>
				<FormLabel>Country</FormLabel>
				<Input
					onChange={(e) => setCountry(e.target.value)}
				/>
			</FormControl>

			<Button size="lg" mt={4} w="full" colorScheme="brand" onClick={handleSubmit}>Register</Button>
			
			<Link color="blue.500" mb={4} onClick={() => navigate("/login")}>
				You already have an account? Login here.
			</Link>
		</>
	);
};

export default Signup;