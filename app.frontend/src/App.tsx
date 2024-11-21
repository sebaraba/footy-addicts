import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import NewRegistrationPage from "./pages/NewRegistrationPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PlayerProfilePage from "./pages/PlayerProfilePage";
import customTheme from "./theme/theme";
import SignupPage from "./pages/SignupPage";
import CurrentMatchPage from "./pages/CurrentMatchPage";
import MatchesHistoryPage from "./pages/MatchesHistoryPage";
import FavoriteFieldsPage from "./pages/FavoriteFieldsPage";

export const App = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [isAuthenticated, setIsAuthenticated] = useState(() => {
		return localStorage.getItem('token') ? true : false;
	});

	useEffect(() => {

		console.log(location.pathname);

		const loginPaths = ["/login", "/signup"];
		const currentPath = location.pathname;

		// if(!isAuthenticated && !loginPaths.includes(currentPath)){
		// 	navigate("/login");
		// }

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
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/player-profile" element={<PlayerProfilePage />} />
					<Route path="/current-match" element={<CurrentMatchPage />} />
					<Route path="/matches-history" element={<MatchesHistoryPage />} />
					<Route path="/favorite-fields" element={<FavoriteFieldsPage />} />

				</Routes>
			{isAuthenticated && <Footer />}
		</Container>
	</ChakraProvider>
)};
