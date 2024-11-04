import { Box, Input } from "@chakra-ui/react"
import { CardHorizontal } from "../components/CardHorizontal.tsx";
import { useEffect, useState } from "react";
import { getCourts } from "../services/courtsService.ts";


const HomePage = () => {
	const [terenuri, setTerenuri] = useState([]);

	useEffect(() => {
		getCourts()
			.then((data) => {
				console.log("data", data);

				setTerenuri(data);
			})
			.catch((error) => {
				console.error("Error fetching courts:", error);
			});
	}, []);

	return (
		<Box>
			<Input placeholder="Search your sport base" mb={4} width="100%" /> {/* Adds margin below the Input */}

			<h1>Home Page</h1>

			{terenuri.map(
				(teren: { available: boolean; name: string; sportBase: string }) => {
					return <CardHorizontal teren={teren} key={teren.name} />;
				},
			)}
		</Box>

	);
};

export default HomePage;
