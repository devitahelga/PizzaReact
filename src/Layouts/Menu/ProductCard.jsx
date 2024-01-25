/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";
import { storeCartData } from "../../Data/Redux/ReduxSlices";
import { rupiah } from "../../utils/currencyConvert";

export default function ProductCard({ cardContent }) {
  const dispatch = useDispatch();
  const getCartData = useSelector((state) => state.pizza.cartData);

  const addToCart = (pizzaName, quantity, price) => {
    const existingItem = getCartData.find(
      (item) => item.pizzaName === pizzaName
    );

    if (existingItem) {
      return;
    } else {
      const newItem = {
        pizzaName,
        quantity,
        price,
        notes: "",
      };

      dispatch(storeCartData([...getCartData, newItem]));
    }
  };

  return (
    <Card maxW="sm" height="100%">
      <CardBody>
        <Stack>
          <Image
            width="100%" 
            style={{ objectFit: "cover" }} 
            src={cardContent.img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Stack>
        <Stack mt="6" spacing="3">
          <Heading size="md">{cardContent.pizzaName}</Heading>
          <Text>{cardContent.pizzaDescription}</Text>
        </Stack>
      </CardBody>
      <CardFooter width="100%">
        <VStack width="100%">
          <Text color="chocolate" fontSize="2xl" fontWeight="bold" mb={5}>
            {rupiah(cardContent.pizzaPrice)}
          </Text>
          <Button
            width="100%"
            colorScheme="yellow"
            onClick={() =>
              addToCart(
                cardContent.pizzaName,
                1,
                cardContent.pizzaPrice,
                cardContent.img
              )
            }
          >
            Add to cart
          </Button>
        </VStack>
      </CardFooter>
    </Card>
  );
}

//richie
