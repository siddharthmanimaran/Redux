import { useSelector, useDispatch } from "react-redux";
import { PURCHASE } from "../store/actions";

const Purchase = () => {
  const pro = useSelector((state) => state.pr.products);
  const dispatch = useDispatch();
  const logDet = useSelector((state) => state.ur.logIn);

  const pHandler = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let pPrice = e.target.value;
    let obj = { pName, pPrice };

    dispatch({ type: PURCHASE, payload: obj });
  };
  return (
    <>
      <div className="customDiv">
        <h3>purchase--{logDet}</h3>

        <hr />
        <select onChange={(e) => pHandler(e)}>
          {pro.map((product, index) => {
            return (
              <option value={product.price} key={index}>
                {product.pName} - ${product.price}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Purchase;
