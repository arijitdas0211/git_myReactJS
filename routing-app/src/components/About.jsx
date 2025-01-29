import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      About Component
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  )
}
