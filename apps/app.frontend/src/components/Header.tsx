import { Avatar, Box, Flex, Image, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import logo from "../assets/logo_nostroke.svg";
import { useNavigate } from 'react-router-dom';
import React from "react";

export const Header = () => {
	const [isAuthenticated, setIsAuthenticated] = React.useState(!!localStorage.getItem('token'));

	React.useEffect(() => {
		const checkAuth = () => {
			setIsAuthenticated(!!localStorage.getItem('token'));
		};
		window.addEventListener('storage', checkAuth);
		return () => {
			window.removeEventListener('storage', checkAuth);
		};
	}, []);

	const navigate = useNavigate();

	const handleProfileClick = () => {
		navigate("/player-profile"); // Redirect to PlayerProfilePage
	};

	const handleLogoClick = () => {
		navigate("/"); // Redirect to home page
	};

	const handleLogout = () => {
		// Clear authentication token
		localStorage.removeItem('token');
		setIsAuthenticated(false); // Update authentication state
		console.log("Logged out");
		navigate("/login"); // Redirect to login page after logout
	};

	if (!isAuthenticated) return null;

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
				<Menu>
					<MenuButton>
						<Avatar
							name="Dan Abramov"
							src="https://bit.ly/dan-abramov"
							size="md"
							borderRadius="lg"
						/>
					</MenuButton>
					<MenuList>
						<MenuItem onClick={handleProfileClick}>My Profile</MenuItem>
						<MenuItem onClick={handleLogout}>Logout</MenuItem>
					</MenuList>
				</Menu>
			</Box>
		</Flex>
	);
};
