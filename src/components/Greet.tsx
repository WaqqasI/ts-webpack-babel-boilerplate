import React from 'react'

function greet(name : string) {
  return 'Hello '+name;
}

export const Greet = () => {
  return <p>{greet('person')}</p>
}