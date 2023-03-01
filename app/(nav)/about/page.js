'use client'
import {useState} from 'react'

export default function About() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>About</h1>
      <p>{count}</p>
    </div>
  )
}
