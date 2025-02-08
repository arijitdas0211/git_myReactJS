import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
    <div className="container">
        <div className="row">
          <ul className="nav_menu">
            <li className="nav_item">
              <Link to={"/"} className="nav_link">Home</Link>
            </li>
            <li className="nav_item">
              <Link to={"/about"} className="nav_link">About</Link>
            </li>
            <li className="nav_item">
              <Link to={"/portfolio"} className="nav_link">Portfolio</Link>
            </li>
            <li className="nav_item">
              <Link to={"/contact"} className="nav_link">Contact</Link>
            </li>
          </ul>
        </div>
    </div>
    </>
)};
