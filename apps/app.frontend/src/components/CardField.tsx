import { Button, Card, Heading, Image, Text, Flex, Box } from "@chakra-ui/react"
import arenaviola from "/Users/macbook/Desktop/footy-addicts/apps/app.frontend/src/assets/arenaviola.jpg"
import { useNavigate } from "react-router-dom";

// export interface CardFieldProps {
//     teren: {
//       available: boolean;
//       name: string;
//       sportBase: string;
//     };
//   }

// export const CardField = (cardProps: CardFieldProps) => {
//     const { teren } = cardProps;
  



export const CardField = () => {
    
    const navigate = useNavigate();

    const handleBooking = () => {
        navigate("/booking-fields");
    };

    return (
        <Card maxW="sm" overflow="hidden">
            <Image
                src={arenaviola}
                alt="Arena Viola"
            />
            <Flex justify="space-between" align="flex-start" p="4">
                {/* Left Side */}
                <Box textAlign="left" >
                    <Heading size="lg">Arena Viola</Heading>
                    <Text color="gray.500">Timisoara, Romania</Text>
                </Box>
                <Box textAlign="right">
                    <Text fontSize="2xl" fontWeight="bold" color="black">
                        $450
                    </Text>
                    <Button variant="solid" colorScheme="brand" mt="2" onClick={handleBooking}>
                        Book Now
                    </Button>
                </Box>
            </Flex>
        </Card>
    )
}
