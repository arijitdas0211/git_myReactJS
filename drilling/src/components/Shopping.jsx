import React, { useState } from 'react'
import Cart from './Cart';

export default function Shopping({user}) {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true);
    }

    if (click) {
        return (
            <Cart user = {user} />
        )
    }

  return (
    <div>
      <h1>Shopping Component</h1>
      <button onClick={handleClick}>Cart</button>
    </div>
  );
}