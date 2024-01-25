/* eslint-disable react/prop-types */
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  HStack,
  Center,
  Input,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { storeCartData, deleteCartData } from "../../Data/Redux/ReduxSlices";
import { rupiah } from "../../utils/currencyConvert";

export default function CartItem({ item }) {
  const itemName = item.pizzaName;
  const itemQty = item.quantity;
  const itemPrice = item.price;
  const itemNotes = item.notes;
  const itemImage = "";

  const dispatch = useDispatch();
  const getCartData = useSelector((state) => state.pizza.cartData);

  const addItemQty = (name) => {
    const newCartData = getCartData.map((data) => {
      if (data.pizzaName == name) {
        let currentQty = data.quantity;
        return { ...data, quantity: (currentQty += 1) };
      }

      return data;
    });

    dispatch(storeCartData(newCartData));
  };

  const reduceItemQty = (name) => {
    const newCartData = getCartData.map((data) => {
      if (data.pizzaName == name) {
        let currentQty = data.quantity;
        return { ...data, quantity: currentQty - 1 };
      } else {
        return data;
      }
    });

    dispatch(storeCartData(newCartData.filter((data) => data.quantity > 0)));
  };

  const addNotes = (event) => {
    const newCartData = getCartData.map((data) => {
      if (data.pizzaName == itemName) {
        return { ...data, notes: event.target.value };
      }

      return data;
    });

    dispatch(storeCartData(newCartData));
  };

  return (
    <Box>
      <Box>
        <Image src={itemImage} objectFit="cover" boxSize></Image>
      </Box>
      <Heading size="xs" textTransform="uppercase">
        {itemName} - {rupiah(itemPrice * itemQty)}
      </Heading>
      <Center>
        <HStack spacing={8} style={{ marginTop: 10, marginBottom: 15 }}>
          <Button
            colorScheme="red"
            onClick={() => dispatch(deleteCartData(itemName))}
          >
            Remove
          </Button>
          <HStack>
            <Button onClick={() => reduceItemQty(itemName)}>-</Button>
            <Text pt="2" fontSize="sm">
              {itemQty}
            </Text>
            <Button colorScheme="blue" onClick={() => addItemQty(itemName)}>
              +
            </Button>
          </HStack>
        </HStack>
      </Center>
      <Input
        type="textarea"
        placeholder="Notes"
        size={"sm"}
        onChange={addNotes}
        value={itemNotes}
      />
    </Box>
  );
}
