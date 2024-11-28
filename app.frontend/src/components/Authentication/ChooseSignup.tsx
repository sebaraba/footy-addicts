import { Box, Container, Heading, Image, Text, Flex } from "@chakra-ui/react";
import logo from "../../assets/logo_nostroke.svg";
import SignupPage from "../../pages/SignupPage";
import { useNavigate } from "react-router-dom";



const ChooseSignup = () => {

    const navigate = useNavigate();

    const handleSelection = () => {
        navigate("/signup");
    }

    return (
        <>
        <Flex justify="center" align="center" mb={4}>
            <Image src={logo} alt="logo" boxSize={"300px"} mb={2} />
        </Flex>

        <Flex
            direction="row"
            justify="center"
            align="center"
            gap={8}
            p={4}
        >
            <Box
                as="button"
                w="300px"
                h="200px"
                bg="white"
                border="1px solid"
                borderColor="gray.300"
                borderRadius="lg"
                boxShadow="md"
                _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
                _active={{ boxShadow: "lg", transform: "scale(0.98)" }}
                transition="all 0.2s ease"
                onClick= {handleSelection}
            >
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                    I’m a Field Owner
                </Text>
                <Text color="gray.600">Sign up to enroll your field.</Text>
            </Box>

            {/* Customer Option */}
            <Box
                as="button"
                w="300px"
                h="200px"
                bg="white"
                border="1px solid"
                borderColor="gray.300"
                borderRadius="lg"
                boxShadow="md"
                _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
                _active={{ boxShadow: "lg", transform: "scale(0.98)" }}
                transition="all 0.2s ease"
                onClick={handleSelection}
            >
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                    I’m a Player
                </Text>
                <Text color="gray.600">Find and book the perfect field.</Text>
            </Box>
        </Flex>
        </>
    );
};



export default ChooseSignup;