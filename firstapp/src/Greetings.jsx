import React from 'react'

// We need to export function as default. Otherwise, import should be { Greetings }
export default function Greetings({name, age, last_name}) {    // Whenever passing only one prop use props. Otherwise, {name, age} like this.           
  return (
    <>
        <h2>Hello {name} {last_name}</h2>
        <p>Your age: {age} </p>
    </>
  )
}

// Props are immutable
// In child properties (props) are read only property.
// Parent to child data can flow
