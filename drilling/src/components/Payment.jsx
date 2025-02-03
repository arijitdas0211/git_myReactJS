import React, { useState } from "react";

export default function Payment({ user }) {
  const [click, setClick] = useState(false);
  let [balance, setBalance] = useState(user.balance);

  const handleClick = () => {
    setClick(true);
    setBalance(balance - 5000);
  };

  if (click) {
    return (
        <Payment user={{ ...user, balance }} />
    );
  }

  return (
    <div>
      <h1>Payment Component</h1>
      <h3>
        Username: {user.username} | Balance: {user.balance}
      </h3>
      <button onClick={handleClick}>Pay</button>
    </div>
  )
};
