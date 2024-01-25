import Card from "./ProductCard";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Menu() {
  const getSearchKeyword = useSelector((state) => state.pizza.searchKeyword);
  
  const pizzaData = [
    {
      img: "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?w=740&t=st=1705638595~exp=1705639195~hmac=2953608be966523daa272f0303ba6c30a7931545957daa43bf25f908711ba342",
      pizzaName: "Deluxe Spicy Beef",
      pizzaPrice: 73000, 
      pizzaDescription:
        "Burger Sapi, Potongan Tomat, Keju Mozzarella, Saus Chili Tomato dan Ekstra Saus Spicy Mayo",
    },
    {
      img: "https://img.freepik.com/free-photo/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view_639032-297.jpg?size=626&ext=jpg&ga=GA1.1.1147689959.1705638586&semt=ais",
      pizzaName: "Deluxe Smoked Beef",
      pizzaPrice: 80000,
      pizzaDescription:
        "Daging Sapi Asap, Onion, Keju Mozzarella dan Ekstra Saus Mayonnaise",
    },
    {
      img: "https://img.freepik.com/free-photo/mushroom-pizza-vegetarian-white-background-isolated-still-life-copy-space-top-view-flat-lay_639032-295.jpg?size=626&ext=jpg&ga=GA1.2.1147689959.1705638586&semt=ais",
      pizzaName: "Deluxe Chicken Pizza",
      pizzaPrice: 120000,
      pizzaDescription:
        "Daging Ayam Asap, Jagung, Keju Mozzarella, Saus Honey Mustard dan Ekstra Saus Mayonnaise",
    },
    {
      img: "https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?w=740&t=st=1705638829~exp=1705639429~hmac=8e42a3bfb9a26c3d29fab84c030e7472650cb21580d8407149e093caf74dc43d",
      pizzaName: "Super Supreme",
      pizzaPrice: 56000,
      pizzaDescription:
        "Daging Ayam Asap, Daging Asap & Burger Sapi, Jamur, Onion, Nanas, Paprika, Keju Mozzarella",
    },
    {
      img: "https://img.freepik.com/premium-photo/pizza-with-fresh-champignons-bacon-smoked-chicken-fillet-mozzarella-cheese-sliced-tomato-green-onions-piece-is-cut-off-from-pizza-white-background-isolated-closeup-view-from_323569-270.jpg?w=740",
      pizzaName: "American Favourite",
      pizzaPrice: 250000,
      pizzaDescription:
        "Pepperoni, beef topping, jamur, keju mozzarella, onion, saus pizza spesial",
    },
    {
      img: "https://img.freepik.com/premium-photo/fresh-tasty-four-seasons-pizza-isolated-white-background_136401-4229.jpg?w=740",
      pizzaName: "Splitza Meat Lovers",
      pizzaPrice: 125000,
      pizzaDescription:
        "American Favourite Pizza dengan 2 Topping : Meat Lovers dan American Favourite",
    },
    {
      img: "https://img.freepik.com/premium-photo/pizza-with-nachos-corn-chips-cheese-sauce-view-from-white-background-isolated_323569-195.jpg?w=740",
      pizzaName: "Cheese Overload",
      pizzaPrice: 100000,
      pizzaDescription:
        "Keju Mozzarella, String Cheese, Cream Mayo, Keju Parmesan, White Cheese",
    },
    {
      img: "https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg?size=626&ext=jpg&ga=GA1.2.1147689959.1705638586&semt=ais",
      pizzaName: "Veggie Garden",
      pizzaPrice: 325000,
      pizzaDescription:
        "Jamur, paprika merah & hijau, nanas, jagung dan keju mozzarella",
    },
    {
      img: "https://img.freepik.com/premium-photo/pizza-with-mozzarella-cheese-salmon-fillet-tiger-shrimp-tomato-slices-olives-cream-cheese-view-from-white-background-isolated_323569-308.jpg?w=740",
      pizzaName: "Tuna Melt",
      pizzaPrice: 40000,
      pizzaDescription: "Tuna, Jagung, Keju Mozzarella",
    },
    {
      img: "https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?size=626&ext=jpg&ga=GA1.2.1147689959.1705638586&semt=ais",
      pizzaName: "Pepperoni",
      pizzaPrice: 75000,
      pizzaDescription: "Pepperoni, keju mozzarella, saus pizza spesial",
    },
  ];
  return (
    <SimpleGrid columns={3} spacing={5} w="75vw">
      {pizzaData
        .filter((data) =>
          data.pizzaName.toLowerCase().includes(getSearchKeyword.toLowerCase())
        )
        .map((pizza, index) => (
          <Box key={index}>
            <Card cardContent={pizza}></Card>
          </Box>
        ))}
    </SimpleGrid>
  );
}
