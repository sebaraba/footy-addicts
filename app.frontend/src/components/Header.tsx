import { Avatar, Box, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo_nostroke.svg"
import { useNavigate } from 'react-router-dom';

export const Header = () => {

	const navigate = useNavigate();

	const handleProfileClick = () => {
		navigate("/player-profile"); // Redirect to PlayerProfilePage
	};

	const handleLogoClick = () => {
		navigate("/"); // Redirect to PlayerProfilePage
	};

	return (
		<Flex direction="row" align="flex-start" justify="center" w="100%" wrap="wrap" mt="100px" mb="50px">
			<Box maxW="300px" w="100%" display="flex" alignItems="center" ml="auto">
				<Image
					src={logo}
					alt="logo" // Adjust the logo size for responsiveness
					mb={2}
					onClick={handleLogoClick}
				/>
			</Box>
			<Box ml="auto">
				<Avatar
					name="Dan Abramov"
					src="https://bit.ly/dan-abramov"
					size="lg"
					onClick={handleProfileClick}
				/>
			</Box>
		</Flex>

	);
};
