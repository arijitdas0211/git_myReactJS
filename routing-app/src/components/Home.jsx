import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Home Component
      <div>
        <Link to={"/about"}>About</Link>
      </div>
      <div>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
}
