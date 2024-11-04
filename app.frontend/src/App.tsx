import { Routes, Route, useNavigate } from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import NewRegistrationPage from "./pages/NewRegistrationPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PlayerProfilePage from "./pages/PlayerProfilePage";
import customTheme from "./theme/theme";
import { useEffect, useState } from "react";

export const App = () => {
	const navigate = useNavigate();
	const [isAuthenticated, setIsAuthenticated] = useState(() => {
		return localStorage.getItem('token') ? true : false;
	});

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/');
		}
		else {
			navigate('/login');
		}
	}, [isAuthenticated]);

	return (
	<ChakraProvider theme={customTheme}>
		<Container maxW="100%">
			{isAuthenticated && <Header />}
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/register" element={<RegistrationPage />} />
					<Route path="/new-register" element={<NewRegistrationPage />} />
					<Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
					<Route path="/player-profile" element={<PlayerProfilePage />} />
				</Routes>
			{isAuthenticated && <Footer />}
		</Container>
	</ChakraProvider>
)};
