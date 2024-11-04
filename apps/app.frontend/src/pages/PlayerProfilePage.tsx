import { Box, Input } from "@chakra-ui/react";
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";

export const PlayerProfilePage = () => {

    return(

        <Box>

        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        </Box>
        
    
      );
}

export default PlayerProfilePage;