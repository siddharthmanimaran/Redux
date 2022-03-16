import * as actions from "./actions";

const initialData = {
  products: [
    { pName: "Apple", price: 20 },
    { pName: "Banana", price: 3 },
    { pName: "Orange", price: 10 },
    { pName: "Grapes", price: 8 },
  ],
  cart: [],
  total: 0,
};
const productReducer = (state = initialData, action) => {
  if (action.type === actions.PURCHASE) {
    return {
      ...state,
      cart: [...state.cart, action.payload],
      total: state.total + parseInt(action.payload.pPrice),
    };
  }
  if (action.type === actions.DELETE) {
    console.log(action.payload);
    return {
      ...state,
      cart: state.cart.filter((i, index) => index !== action.payload.index),
      total: state.total - action.payload.price,
    };
  }
  return state;
};

export default productReducer;
