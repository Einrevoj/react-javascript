import React from "react";
import { useState } from "react";




export default function CountNumberOfVowels() {
    const [input, setInput] = useState("");

    const getCountNumberOfVowels = () => {
        let total = 0;
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
        <div className="col-md-5">{getCountNumberOfVowels()}</div>
      </div>
    </div>
  );
}
