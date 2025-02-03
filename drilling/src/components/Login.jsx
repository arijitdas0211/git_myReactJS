import React, { useState } from 'react'
import Shopping from './Shopping';

export default function Login({user}) {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true);
    }

    if (click) {
        return (
            <Shopping user = {user} />
        )
    }

  return (
    <div>
      <h1>Login Component</h1>
      <h3>Username: {user.username} | Current balance: {user.balance}</h3>
      <button onClick={handleClick}>Shopping</button>
    </div>
  );
}
