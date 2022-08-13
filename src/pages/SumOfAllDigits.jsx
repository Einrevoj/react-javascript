import React from "react";
import { useState } from "react";

function SumOfAllDigits() {
  const [input, setInput] = useState("");

  
  const getSumOfDigits = () => {
    let total = 0;

    // input.split("").forEach((character) => {
    //   if (
    //     character.toLowerCase() === "a")
    //      {
    //       total = total + 1;
    //   }
    // });

     input.split("").forEach((character) => {
      if (
        character.toLowerCase().match(/[aeiou]/))
         {
          total = total + 1;
      }
    });
  

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
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            readOnly={true}
            placeholder="Output"
            value={getSumOfDigits()}
          />
        </div>
      </div>
    </div>
  );
}

export default SumOfAllDigits;
