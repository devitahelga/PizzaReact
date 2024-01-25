import { Flex, Stack } from "@chakra-ui/react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Menu from "./Layouts/Menu/Menu";
import Bill from "./Components/Bill/Bill";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Flex>
        <Menu />
        <Stack>
          <Cart />
          <Bill />
        </Stack>
      </Flex>
    </>
  );
}

export default App;
