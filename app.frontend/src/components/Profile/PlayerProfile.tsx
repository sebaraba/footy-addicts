import { Box, Heading, Input, IconButton } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { FaRegStar } from 'react-icons/fa';
import { TbCurrentLocation } from "react-icons/tb";
import { LuHistory } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const PlayerProfile = () => {

    const navigate = useNavigate();

	const handleMatchButton = () => {
		navigate("/current-match");
	};


    const handleFavoriteshButton = () => {
		navigate("/favorite-fields");
	};

    const handleHistoryButton = () => {
		navigate("/matches-history");
	};


    return (
        <Box >

            <Box display="flex" justifyContent="center" mb={8} gap={16}>
                <IconButton
                    icon={<LuHistory fontSize="30px" />}
                    aria-label="Reservation History"
                    size="lg"
                    variant="outline"
                    bg="#199266"
                    color="white" 
                    _hover={{ bg: "primary.50" }}
                    borderRadius="md"
                    onClick={handleHistoryButton}
                />
                <IconButton
                    icon={<FaRegStar fontSize="30px" />}
                    aria-label="Favorite Fields"
                    size="lg"
                    variant="outline"
                    bg="#199266"
                    color="white"
                    _hover={{ bg: "primary.50" }}
                    borderRadius="md"
                    onClick={handleFavoriteshButton}
                />
                <IconButton
                    icon={<TbCurrentLocation fontSize="30px" />}
                    aria-label="Current Reservation"
                    size="lg"
                    variant="outline"
                    bg="#199266"
                    color="white"
                    _hover={{ bg: "primary.50" }}
                    borderRadius="md"
                    onClick={handleMatchButton}
                />
            </Box>
            <Heading as="h3" mb={10}>General Information</Heading>

            <Box color="gray.400" >

                <FormControl mb={4}>
                    <FormLabel fontSize="sm" mb={0}>First Name</FormLabel>
                    <Input variant="flushed" />
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel fontSize="sm" mb={0}>Last Name</FormLabel>
                    <Input variant="flushed" />
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel fontSize="sm" mb={0}>Nickname</FormLabel>
                    <Input variant="flushed" />
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel fontSize="sm" mb={0}>Role</FormLabel>
                    <Input variant="flushed" />
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel fontSize="sm" mb={0}>Email address</FormLabel>
                    <Input type="email" variant="flushed" />
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel fontSize="sm" mb={0}>Phone Number</FormLabel>
                    <Input variant="flushed" />
                </FormControl>

            </Box >

        </Box>
    );
}

export default PlayerProfile;