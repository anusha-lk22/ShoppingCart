
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import DataContext from "./DataContext";
function Topbar() {
  const dataList = useContext(DataContext);

  return (
    <div>
      <div className="flex justify-between">
      <div></div>
      <div className="mt-7 text-3xl font-bold">Shopping Cart</div>
      <button type="button" className="hover:bg-black hover:text-white font-md mt-5 px-3 py-2 rounded-md border-2">
        <i className="fa fa-shopping-cart"></i>
        cart&nbsp;&nbsp;&nbsp;
        <span className="rounded-full border-2 p-2">
      
          <FontAwesomeIcon icon={faShoppingCart} key="msv" />
        </span>
        Cart
          {dataList.DataSet.length > 0
            ? dataList.DataSet.length
            : 0}
        </button>
      
    </div>
    <hr className="mt-6 mb-8"/>
      
    </div>
  );
}

export default Topbar;
