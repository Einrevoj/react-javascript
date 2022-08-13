import React from "react";
import { useState } from "react";

export default function LargestNumber() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");

  const getLargestNumber = () => {
// if (
//     parseFloat(firstInput) > parseFloat(secondInput) &&
//         )>= firstInput && firstInput > thirdInput) {
//         return firstInput;
//     } else if (secondInput > firstInput && secondInput > thirdInput) {
//         return secondInput;
//     } else (thirdInput > firstInput && thirdInput > secondInput) {
//         return thirdInput;
//     }

return Math.max(firstInput, secondInput, thirdInput);
    
};

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            className="w-100 lead"
            placeholder="Input"
            value={firstInput}
            onChange={(e) => setFirstInput(e.target.value)}
          />
           <input
            type="text"
            className="w-100 lead"
            placeholder="Input"
            value={secondInput}
            onChange={(e) => setSecondInput(e.target.value)}
          />
           <input
            type="text"
            className="w-100 lead"
            placeholder="Input"
            value={thirdInput}
            onChange={(e) => setThirdInput(e.target.value)}
          />
        </div>
        <div className="col-md-5">{getLargestNumber()}</div>
      </div>
    </div>
  );
}
