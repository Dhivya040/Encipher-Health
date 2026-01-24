import React from "react";

function FruitList() {
  const fruits = ["Apple", "Banana", "Orange"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default FruitList;
