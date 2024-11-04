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
		<Flex direction="row">
			<Box maxW="100%">
				<Image src={logo} alt="logo" boxSize={"100px"} mb={2} onClick={handleLogoClick} />
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
