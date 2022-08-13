
import React, { useState } from "react";

export default function IsoscelesTriangle() {
  const [input, setInput] = useState("");

  const getIsoscelesTriangle = () => {
    //check if letter or null
    if (isNaN(input) || !input) {
      return "Plese enter a number";
    }

    let total = "";

    const rightTriangle = [];

    for (let i = 1; i <= input; i++) {
      total = total.concat(" ", i);
      rightTriangle.push(total);
    }
    

    // const reverseRightTriangle = rightTriangle.slice().reverse().slice(1);
    const fullTriangle = [].concat(
        rightTriangle, 
        rightTriangle.slice().reverse().slice(1));
    

    return fullTriangle.map((data, index) => (
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
        <div className="col-md-5">
            {getIsoscelesTriangle()}
        </div>
      </div>
    </div>
  );
}