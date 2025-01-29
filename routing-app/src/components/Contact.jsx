import React from 'react'
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      Contact Component
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/about"}>About</Link>
      </div>
    </div>
  );
}
