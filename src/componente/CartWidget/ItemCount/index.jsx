import "./ItemCount.css";

import React, { useState, useEffect } from "react";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="counter">
      <button disabled={count <= 1} className="decrease" onClick={decrease}>
        -
      </button>
      <span className=" count">{count}</span>
      <button disabled={count >= stock} className="increase" onClick={increase}>
        +
      </button>

      <div>
        <button
          className="addCartButton"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Add to the cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
