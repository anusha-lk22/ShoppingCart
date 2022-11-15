import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./DataContext";
export default function Home() {
  const { DataSet, setDataSet } = useContext(DataContext);
  const handlePlus = (id) => {
    let index = DataSet.findIndex((el) => el.id === id);
    DataSet[index].count++;
    setDataSet([...DataSet]);
  };
  const handleMinus = (id) => {
    let index = DataSet.findIndex((el) => el.id === id);
    DataSet[index].count--;
    setDataSet([...DataSet]);
  };
  const handleRemove = (id) => {
    let index = DataSet.findIndex((el) => el.id === id);
    DataSet[index].count = 0;
    DataSet.splice(index, 1);
    setDataSet([...DataSet]);
  };

  return (
    <div>
      <div className="text-center">
        <Link to="/" className="mt-6 px-5 py-2 border rounded-md">
          Home
        </Link>
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {DataSet.length > 0 ? (
          DataSet.map((card) => {
            return (
              <div
                className="ml-5 box-border border-2 rounded-lg p-6"
                key={card.id}
              >
                <div className="text-center font-bold">{card.productName}</div>
                <div className="text-center">
                  {card.count} * {card.price} = $ {card.price * card.count}
                </div>
                <div className="flex flex-auto gap-4">
                  <button
                    type="button"
                    className="mt-6 px-5 py-2 border rounded-md disabled"
                    onClick={() => handleMinus(card.id)}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="mt-6 px-5 py-2 border rounded-md"
                    onClick={() => handlePlus(card.id)}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="mt-6 px-5 py-2 border rounded-md"
                    onClick={() => handleRemove(card.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="mt-6 font-bold">Your Card is Empty</div>
        )}
      </div>
    </div>
  );
}
