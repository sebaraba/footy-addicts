import { Box, Container } from "@chakra-ui/react";
import PlayerProfile from "/Users/macbook/Desktop/footy-addicts/apps/app.frontend/src/components/Profile/PlayerProfile.tsx";

export const PlayerProfilePage = () => {

    return(

		<Container centerContent={true}>
			<Box bg="#F6F6F6" w="1000px" p="8" borderRadius="md" boxShadow="md">
                <PlayerProfile/>
            </Box>
        </Container>
        
    
      );
}

export default PlayerProfilePage;