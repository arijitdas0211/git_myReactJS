import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <p>About Component</p>
      <div>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/contact"}>
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
}
