import React, { useState } from 'react';

export default function Example3() {
  // Declare a new state variable, which we'll call "count"
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  const calculate = () => {
    if (a === 'mrkhang' && b === '12345')
    {
      alert('Logged in successful');
    }
    else {
      alert('Nice try hacker')
    }
    }

  return (
    <div>
        <div>
                        <p>Username</p>
                        <input name="inputA" onChange={e => setA(e.target.value)}></input>
                        <p>Password</p>
                        <input name="inputB" type="password" onChange={e => setB(e.target.value)}></input> 
                        <div className="command" onClick={calculate}><button>Calculate</button></div>
        </div>
    </div>
  );
}