import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fibonacci from './pages/Fibonacci';
import Strings from './pages/Strings';
import PrimeNumbers from './pages/PrimeNumbers';
import MultiplicationTable from './pages/MultiplicationTable';
import SumOfAllDigits from './pages/SumOfAllDigits';
import SumOfNaturalNumbers from './pages/SumOfNaturalNumbers';
import CheckWithin100To500 from './pages/CheckWithin100To500';
import RightTriangle from './pages/RightTriangle';
import IsoscelesTriangle from './pages/IsoscelesTriangle';
import NumberRightTriangle from './pages/NumberRightTriangle';
import GetLargestNumber from './pages/GetTheLargest';
import CountNumberOfVowels from './pages/CountNumberOfVowels';
import NumberIsoTriangle from './pages/NumberIsoTriangle';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fibonacci' element={<Fibonacci />} />
        <Route path='/strings' element={<Strings />} />
        <Route path='/prime-numbers' element={<PrimeNumbers />} />
        <Route path='/multiplication-table' element={<MultiplicationTable />} />
        <Route path='/sum-of-all-digits' element={<SumOfAllDigits />} />
        <Route path='/sum-of-natural-numbers' element={<SumOfNaturalNumbers />} />
        <Route path='/check-within-number' element={<CheckWithin100To500 />} />
        <Route path='/right-triangle' element={<RightTriangle />} />
        <Route path='/isosceles-triangle' element={<IsoscelesTriangle />} />
        <Route path='/number-right-triangle' element={<NumberRightTriangle />} />
        <Route path='/get-largest-number' element={<GetLargestNumber/>} />
        <Route path='/count-number-of-vowels' element={<CountNumberOfVowels/>} />
        <Route path='/number-iso-triangle' element={<NumberIsoTriangle/>} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;

