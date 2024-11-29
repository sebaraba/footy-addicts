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
		<Flex

			direction="row"
			align="center"
			justify="space-between"
			w="100%"
			maxW="1600px"  // Prevent stretching on large screens
			mx="auto"      // Centers the Flex container horizontally
			p="50px"       // Padding to add space around content
			position="relative">
			<Box display="flex"
				alignItems="center"
				justifyContent="center"
				w="20%"  // Make it take full width for centering
				position="absolute"
				left="50%"
				transform="translateX(-50%)">
				<Image
					src={logo}
					alt="logo" // Adjust the logo size for responsiveness
					onClick={handleLogoClick}
				/>
			</Box>
			<Box ml="auto">
				<Avatar
					name="Dan Abramov"
					src="https://bit.ly/dan-abramov"
					size="md"
					borderRadius="lg"
					onClick={handleProfileClick}
				/>
			</Box>
		</Flex>

	);
};
