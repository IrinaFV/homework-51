import React, {useState} from 'react';
import './App.css';
import Game from "./Game/Game";

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const generateNumbers = () => {
    const newNumbers: number[] = [];
    while (newNumbers.length < 5) {
      const randomNumber: number = Math.floor(Math.random() * 32) + 5;
      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
      }
    }
    setNumbers(newNumbers.sort((a, b) => a - b));
  };
  return(
    <div className="App">
      <button onClick={generateNumbers}>New numbers</button>
      <div className="numbers">
        {numbers.map((number) => (
          <Game key={number} number={number} />
        ))}
      </div>
    </div>
    );
};

export default App;
