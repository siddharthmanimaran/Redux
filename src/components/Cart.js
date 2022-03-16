import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../store/actions";
const Cart = () => {
  const cart = useSelector((state) => state.pr.cart);
  const dispatch = useDispatch();
  const logDet = useSelector((state) => state.ur.logIn);

  const deleteItem = (index, price) => {
    dispatch({ type: DELETE, payload: { index, price } });
  };
  return (
    <div className="customDiv">
      <h3>Cart Component--{logDet}</h3>
      <hr />
      <ul>
        {cart.map((product, index) => {
          return (
            <li onClick={() => deleteItem(index, product.pPrice)} key={index}>
              {product.pName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
