import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container p-5">
      <ol class="list-group">
        <li class="list-group-item">Click the title to navigate to the page</li>

        <li class="list-group-item list-group-item-primary">
          <Link to="/fibonacci">Fibonacci</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/Multiplication-table">MultiplicationTable</Link>
        </li>
        <li class="list-group-item list-group-item-success">
          <Link to="/prime-numbers">Prime Numbers</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/strings">Strings</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/sum-of-natural-numbers">Sum of Natural Numbers</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/sum-of-all-digits">Sum of All Digits</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/check-within-number">Check Within Numbers</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/right-triangle">right Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/isoschele-triangle">Isosceles Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/number-right-triangle">Number Right Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/get-largest-number">Get Largest Number</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/count-number-of-vowels">Count Number Of Vowels</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/number-iso-triangle">Number Iso Triangle</Link>
        </li>
        
        
      
      

      </ol>
    </div>
  );
}

export default Home;