import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
  // Declaración de una variable de estado que llamaremos "count"  const [count, setCount] = useState(0);

  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < props.stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const onADD = () => {
      console.log("Se agrego " + count + " productos al carrito :");
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
      <button disabled={count === 0} 
      onClick={onADD}>Agregar Carrito</button>
    </div>
  );
};

export default ItemCount;
