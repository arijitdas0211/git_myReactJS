import React, { useState } from 'react';
import Payment from './Payment';

export default function Cart({user}) {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true);
    }

    if (click) {
        return (
            <Payment user = {user} />
        )
    }

  return (
    <div>
      <h1>Cart Component</h1>
      <button onClick={handleClick}>Payment</button>
    </div>
  )
}
