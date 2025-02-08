import React from 'react'
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <p>Contact Component</p>
      <div>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/about"}>
          <button>About</button>
        </Link>
      </div>
    </div>
  );
}
