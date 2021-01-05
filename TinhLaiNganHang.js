import React, { useState } from 'react';

export default function Example2() {
  // Declare a new state variable, which we'll call "count"
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [result, setResult] = useState('');

  const calculate = () => {
    //    var {a, b, c} = this.state //spread operator
      var profit = a*b*(c/12);
      setResult('The profit money is ' + profit);
    }

  return (
    <div>
        <div>
                        <p>Money</p>
                        <input name="inputA" onChange={e => setA(e.target.value)}></input>
                        <p>Months</p>
                        <input name="inputB" onChange={e => setB(e.target.value)}></input> 
                        <p>Interest rate</p>
                        <input name="inputC" onChange={e => setC(e.target.value)}></input>
                        <div className="command" onClick={calculate}><button>Calculate</button></div>
                        <input name="RESULT" value={result}></input>
        </div>
    </div>
  );
}