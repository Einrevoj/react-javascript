import React, { useState } from "react";

export default function CheckWithinNumber() {
  const [input, setInput] = useState("");

  const getcheckNumber = () => {
    //check if letter or null
    if (isNaN(input) || !input) {
      return "Plese enter a number";
    }

    // let isWithin = "false";
    // for (let i = 100; i <= 500; i++)
    //   if (i === parseInt(input)) {
    //     isWithin = "true";
    //   }

    let isWithin = "false";
     if (100 <= parseInt(input) && parseInt(input) <= 500) {
    isWithin = "true";

          }

    return input;

    // return `$100 <= parseInt(input) && parseInt(input)`;
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12">
          <input
            type="text"
            className="w-50 lead"
            placeholder="Please enter a positive number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-12">
          <div className="pt-5">
            {getcheckNumber()}
          </div>
        </div>
      </div>
    </div>
  );
}
