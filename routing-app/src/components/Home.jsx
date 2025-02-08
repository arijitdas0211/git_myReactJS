import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>Home Component</p>
      <div>
        <Link to={"/about"}>
          <button>About</button>
        </Link>

        <Link to={"/contact"}>
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
}
