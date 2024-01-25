import { useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  StackDivider,
} from "@chakra-ui/react";
import CartItem from "./CartItem";


export default function Cart() {
  const getCartData = useSelector((state) => state.pizza.cartData);
 
  return (
    <Card ml={4} width="100%" minWidth="16rem" minHeight="10rem">
      <center>
        <CardHeader>
          <Heading size="100%" marginBottom="24px">
            Cart
          </Heading>
          {getCartData.length <= 0 ? (
            <div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
                style={{ height: 200 }}
              ></img>
              <p>
                Keranjang kamu masih kosong, yuk pilih pizzamu terlebih dahulu
              </p>
            </div>
          ) : (
            <div></div>
          )}
        </CardHeader>
      </center>
      <CardBody maxWidth="25rem" minWidth="25rem">
        <Stack divider={<StackDivider />} spacing="4">
          {getCartData.length > 0 ? (
            
            getCartData.map((item, index) => (
              <CartItem key={index} itemIndex={index} item={item}></CartItem>
            ))
          ) : (
            <div></div>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
}
//xyz
