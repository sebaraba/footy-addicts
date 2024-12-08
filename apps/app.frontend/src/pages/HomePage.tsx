import { Box, Input, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import BusinessCourtsComponent from "../components/BusinessCourtsComponent.tsx";
import CourtsComponent from "../components/CourtsComponent.tsx";



const HomePage = () => {
	const [user, setUser] = useState(null); // State to store user info
	const [isAdmin, setIsAdmin] = useState(false); // State to store admin status

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			const payload = JSON.parse(atob(token.split(".")[1]));
			setUser(payload);
			setIsAdmin(payload.isAdmin || false);
		}
	}, []);

	return (
		<Flex direction="column" align="center" wrap="wrap" p={4}>
			<Box w="100%" maxW="600px" textAlign="center">
				<Input placeholder="Search your sport base" mb={4} width="100%" size="lg" />
			</Box>
					{isAdmin ? (
						<BusinessCourtsComponent user={user} />
					) : (
						<CourtsComponent />
					)}
			{/* {terenuri.map(
					(teren: { available: boolean; name: string; sportBase: string }) => {
						return <CardHorizontal teren={teren} key={teren.name} />;
					},
				)} */}

		</Flex>
	);
};

export default HomePage;
