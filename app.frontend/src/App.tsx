import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
import SignupPage from "./pages/SignupPage";

export const App = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [isAuthenticated, setIsAuthenticated] = useState(() => {
		return localStorage.getItem('token') ? true : false;
	});

	useEffect(() => {
		if (!isAuthenticated && location.pathname !== '/signup' && location.pathname !== '/login') {
			navigate('/login');
		}
		
		if (isAuthenticated && (location.pathname === '/login' || location.pathname === '/signup')) {
			navigate('/');
		}
	}, [isAuthenticated, location.pathname, navigate]);

	return (
	<ChakraProvider theme={customTheme}>
		<Container maxW="100%">
			{isAuthenticated && <Header />}
				<Routes>
					
					<Route path="/" element={<HomePage />} />
					<Route path="/register" element={<RegistrationPage />} />
					<Route path="/new-register" element={<NewRegistrationPage />} />
					<Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/player-profile" element={<PlayerProfilePage />} />
				</Routes>
			{isAuthenticated && <Footer />}
		</Container>
	</ChakraProvider>
)};
