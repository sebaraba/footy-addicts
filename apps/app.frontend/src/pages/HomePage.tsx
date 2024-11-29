import { Box, Input, Flex } from "@chakra-ui/react"
import { useEffect } from "react";
import { getCourts } from "../services/courtsService.ts";
import { CardField } from "../components/CardField.tsx";


const HomePage = () => {
	// const [terenuri, setTerenuri] = useState([]);

	useEffect(() => {
		getCourts()
			.then((data) => {
				console.log("data", data);

				// setTerenuri(data);
			})
			.catch((error) => {
				console.error("Error fetching courts:", error);
			});
	}, []);

	return (
		<Flex direction="column" align="center" wrap="wrap" p={4}>
			<Box w="100%" maxW="600px" textAlign="center">
				<Input placeholder="Search your sport base" mb={4} width="100%" size="lg" /> {/* Adds margin below the Input */}
			</Box>

			<Flex w="100%" justify="flex-start">
				<Box maxW="600px" w="100%" mt={10}>
					<CardField />
				</Box>
				
			</Flex>
			{/* {terenuri.map(
					(teren: { available: boolean; name: string; sportBase: string }) => {
						return <CardHorizontal teren={teren} key={teren.name} />;
					},
				)} */}

		</Flex>
	);
};

export default HomePage;
