import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWallet } from '../Store';

export default function Payment() {
    const data = useSelector(state => state.user);
    const ref = useDispatch();
    const handleClick = ()=> {
        ref(updateWallet(5000));
    }

  return (
    <div>
        <h3>Payment Component</h3>
        <h4>
            {data.username} | {data.balance}
        </h4>
        <button onClick={handleClick}>PAY</button>
    </div>
  )
};
