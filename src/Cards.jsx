import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import DataContext from "./DataContext";
import cardsObj from "./Cards.json";
export default function Cards({ card }) {
  const { DataSet, setDataSet } = useContext(DataContext);
  let handleClick = (id) => {
    let ix = cardsObj.cards.find((e) => e.id === id);
    let index = DataSet.find((el) => el.id === id);
    if (ix && !index) {
      ix.count++;
      setDataSet([...DataSet, ix]);
    }
  };
  return (
    <div className="w-40">
      <div className="box-border border-1 shadow-lg w-25 text-center">
        <div className="bg-gray-300">
          <img
            src="https://dummyimage.com/450x300/"
            alt="Product"
            className="image"
          />
        </div>
        <div className="p-6">
          <strong>{card.productName}</strong>
        </div>
        <p>$ {card.price}</p>
        <div></div>
        <div className="p-5">
          <button
            className="border-2 px-3 py-2 rounded-md hover:bg-black hover:text-white"
            type="button"
            onClick={() => handleClick(card.id)}
          >
            <FontAwesomeIcon icon={faCartPlus} key={card.id + 100} /> Add to
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}
