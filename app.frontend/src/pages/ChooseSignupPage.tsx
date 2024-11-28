import { Box, Container, Heading } from "@chakra-ui/react";
import ChooseSignup from "../components/Authentication/ChooseSignup";

const ChooseSignupPage = () => {

    return (
        <Container centerContent={true}>
            <Box >
                <ChooseSignup />
            </Box>
        </Container>
    );
};

export default ChooseSignupPage;