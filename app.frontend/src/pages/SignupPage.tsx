import { Box, Container } from "@chakra-ui/react";
import Signup from "/Users/macbook/Desktop/footy-addicts/apps/app.frontend/src/components/Authentication/Signup.tsx";
import { useLocation } from "react-router-dom";

const SignupPage = () => {
	const isAdmin = useLocation().pathname.slice(8) === 'admin' ? true : false;
	
	return (
		<Container centerContent={true}>
			<Box w="300px">
				<Signup isAdmin={isAdmin}/>
			</Box>
		</Container>
	);
};

export default SignupPage;
