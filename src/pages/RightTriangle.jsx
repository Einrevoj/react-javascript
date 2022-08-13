import React from "react";
import { useState } from "react";

export default function RightTriangle() {
  const [input, setInput] = useState("");

  const getRightTriangle = () => {
    //check if letter or null
    if (isNaN(input) || !input) {
      return "Plese enter a number";
    }

    let total = "";

    const triangle = [];

    for (let i = 1; i <= input; i++) {
      total = total.concat(" *");
      triangle.push(total);
    }

    return triangle.map((data) => (
    <h2 className="text-primary">{data}</h2>
    ));
};

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            className="w-100 lead"
            placeholder="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-md-5">{getRightTriangle()}</div>
      </div>
    </div>
  );
}
