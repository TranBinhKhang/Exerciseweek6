import React, { useState } from 'react';

export default function Example1() {
  // Declare a new state variable, which we'll call "count"
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [result, setResult] = useState('');

  const calculate = () => {
    //    var {a, b, c} = this.state //spread operator
        var delta = Math.pow(b, 2) - 4*a*c
        if (delta < 0) {
            setResult('Vo nghiem')
        }
        else if (delta === 0){
            var result = -b/(2*a)
            setResult('Phuong trinh co nghiem kep ' + result)
        }
        else {
            var x1 = (-b + Math.sqrt(delta)/(2*a))
            var x2 = (-b - Math.sqrt(delta)/(2*a))
            setResult("PT co nghiem kep x1=x2" + x1 + 'va' + x2)
        }
    }

  return (
    <div>
        <div>
                        <input name="inputA" onChange={e => setA(e.target.value)}></input> <span>x^2+</span>
                        <input name="inputB" onChange={e => setB(e.target.value)}></input> <span>x+</span>
                        <input name="inputC" onChange={e => setC(e.target.value)}></input>< span>=0</span>
                        <div className="command" onClick={calculate}><button>Giải</button></div>
                        <input name="RESULT" value={result}></input>
        </div>
    </div>
  );
}

