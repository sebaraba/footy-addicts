import { Box, Container } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";

const LoginPage = (props: any) => {
	const { setIsAuthenticated } = props;
	
	return (
		<Container centerContent={true}>
			<Box w="300px">
				<Login setIsAuthenticated={setIsAuthenticated}/>
			</Box>
		</Container>
	);
};

export default LoginPage;
