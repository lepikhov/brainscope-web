"use client"

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => Math.max(0, prev - 1));
  
  return (
    <div>
      <h3>{count}</h3>
      <div>
        <button 
          type="button" 
          onClick={decrement}
          disabled={count === 0}
          className={count === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button type="button" onClick={increment}>
          +
        </button>
      </div>    
    </div>
  )
}