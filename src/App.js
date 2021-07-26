import React, {useState} from 'react';

function App(){
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(0);
    function addition() {
        setTotal(number1 + number2);
      }
      function substract() {
        setTotal(number1 - number2);
      }
      function multiplication() {
        setTotal(number1 * number2);
      }
      function division() {
        setTotal(number1 / number2);
      }

    return (
        
        <div className="App">
        <h1>Simple-Calculator</h1>
  
        <div className="number-inputs">
          <input
            type="number"
            value={number1}
            onChange={e => setNumber1(+e.target.value)}
            placeholder="0"
          />
          <input
            type="number"
            value={number2}
            onChange={e => setNumber2(+e.target.value)}
            placeholder="0"
          />
        </div>
  
        <button onClick={addition}>Add</button>
        <button onClick={substract}>Subtract</button>
        <button onClick={multiplication}>Multiply</button>
        <button onClick={division}>Division</button>

        <h2>
            {total}
        </h2>
      </div>
    );
  }

export default App;