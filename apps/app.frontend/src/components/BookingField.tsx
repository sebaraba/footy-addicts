import { Box, Grid, Image, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import image1 from "../assets/arenaviola.jpg";
import image2 from "../assets/arenaviola2.jpg";
import image3 from "../assets/arenaviola.jpg";
import image4 from "../assets/arenaviola.jpg";


const BookingField = () => {

    const images = [image1, image2, image3, image4];
    const [featuredImage, setFeaturedImage] = useState(images[0]); // Set the first image as default

    return (
        <Flex direction="column">
            <Flex
                maxW="1200px"
                h="500px"
                mx="auto"
                p={4}
                gap={4}>
                {/* Featured Image */}
                <Box flex="2">
                    <Image
                        src={featuredImage}
                        alt="Featured"
                        borderRadius="md"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                    />
                </Box>

                {/* Thumbnails */}
                <Grid
                    flex="2"
                    templateColumns="repeat(2, 1fr)" // 2 columns
                    templateRows="repeat(2, 1fr)" // Adjust rows to match the number of thumbnails
                    gap={2}
                    h="100%"
                >
                    {images.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            borderRadius="md"
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            cursor="pointer"
                            border={featuredImage === src ? "2px solid teal" : "none"}
                            onClick={() => setFeaturedImage(src)}
                        />
                    ))}
                </Grid>
            </Flex>

            <Flex >
                <Heading>Arena Viola</Heading>
            </Flex>
        </Flex>


    );
};

export default BookingField;
