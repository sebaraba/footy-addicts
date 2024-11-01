import {
  Button,
  Card,
  Image,
  Stack,
  Heading,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

export interface CardHorizontalProps {
  teren: {
    available: boolean;
    name: string;
    sportBase: string;
  };
}

export const CardHorizontal = (cardProps: CardHorizontalProps) => {
  const { teren } = cardProps;

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md"> {teren.name} </Heading>

          <p>
            Caffè latte is a coffee beverage of Italian origin made with
            espresso and steamed milk. {teren.available}
          </p>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy Latte {teren.sportBase}
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
