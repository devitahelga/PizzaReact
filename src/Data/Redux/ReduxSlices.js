import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  searchKeyword: "",
  orderPlace: [],
  // orderId: 0
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    // MENU DATA
    storeCartData: (state, action) => {
      state.cartData = action.payload;
    },
    deleteCartData: (state, action) => {
      state.cartData = state.cartData.filter(
        (cart) => cart.pizzaName !== action.payload
      );
    },
    storeSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    storeOrderPlace: (state, action) => {
      // // state.orderId +=1;
      // state.orderPlace = [
      //   ...state.orderPlace,
      //   { cartData: state.cartData, orderId: state.orderPlace.length + 1 },
      // ];
      state.orderPlace = [
        ...state.orderPlace,
        { ...action.payload, orderId: state.orderPlace.length + 1 },
      ];
      // console.log(state.orderPlace);
      state.cartData = [];
    },
  },
});

export const {
  storeCartData,
  storeSearchKeyword,
  deleteCartData,
  storeOrderPlace,
} = pizzaSlice.actions;
export default pizzaSlice.reducer;
