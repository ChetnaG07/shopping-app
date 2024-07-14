import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isEmpty: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, qty } = action.payload;
      let existingProduct = state.cart.find((p) => p.id === product.id);
      return {
        isEmpty: false,
        cart: existingProduct
          ? state.cart.map((p) =>
              p.id === existingProduct.id ? { ...p, qty: p.qty + qty } : p
            )
          : [...state.cart, { ...product, qty }],
      };
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      //console.log("caretRemoveId", id);
      //let emptyCart = Boolean(state.cart.length);
      //console.log("emptycart", emptyCart);
      return {
        ...state,
        isEmpty: Boolean(state.cart.length),

        cart: state.cart.filter((item) => item.id !== id),
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
