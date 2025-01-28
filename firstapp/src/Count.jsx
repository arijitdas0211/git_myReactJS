import React, { useState } from 'react';
import "./btnStyle.css";

export default function Count(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Arijit');

    const myName = ()=> {
        setName("Pooja");
    }

    const increase = ()=> {
        setCount(count + 1);
        
    }

    const decrease = ()=> {
        setCount(count - 1);
        
    }

    const reset = ()=> {
        setName("Arijit");
        setCount(0);
        
    }
  return (
    <div>
      <h1>Hello, {name}</h1>
      <h2>{count}</h2>
      <button className='btn' onClick={myName}>Change Name</button>
      <button className='btn' onClick={increase}>+</button>
      <button className='btn' onClick={decrease}>-</button>
      <button className='btn' onClick={reset}>Reset</button>
    </div>
  )
}

// STATE:
/**
 * 
 * 
 * 
 */