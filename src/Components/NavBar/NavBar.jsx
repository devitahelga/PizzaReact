import { HStack, Image, Input, Button, Text, Avatar } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeSearchKeyword } from "../../Data/Redux/ReduxSlices";


export default function NavBar() {
  
  const dispatch = useDispatch();
 
  return (
    <>
      <HStack px={25} py={25} justifyContent={"space-between"}>
        <Image
          src="https://logowik.com/content/uploads/images/pizza1543.logowik.com.webp"
          height={"50px"}
        />
        <Text fontWeight="bold">Pizza Doremii</Text>
        
        <Input
          placeholder="Search"
          width={"50%"}
          onChange={(e) => dispatch(storeSearchKeyword(e.target.value))}
        ></Input>

        <HStack>
          <Button colorScheme="yellow">
            <ReactRouterLink style={{ color: "white" }} to="/history">
              Order History
            </ReactRouterLink>
          </Button>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1827/1827301.png"
            height={"24px"}
            marginRight={"10px"}
            marginLeft={"20px"}
          />
          
          <Avatar name='Profile' src='https://img.freepik.com/free-vector/3d-cartoon-young-woman-smiling-circle-frame-character-illustration-vector-design_40876-3100.jpg?size=626&ext=jpg&ga=GA1.2.1147689959.1705638586&semt=ais' />
          <p>Devita Helga</p>
        </HStack>
      </HStack>
    </>
  );
}
