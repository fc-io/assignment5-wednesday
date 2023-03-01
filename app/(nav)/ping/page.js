'use client'
import {useAtom} from "jotai"
import pingPongAtom from '../pingPongAtom'


export default function Ping() {
  const [pingState, setPingState] = useAtom(pingPongAtom)

  const handleClick = () => {
    setPingState([...pingState, 'ping'])
  }

  return (
    <div>
      <h1>Ping</h1>
      <button onClick={(e) => handleClick(e)}>Ping it!</button>

      {pingState.map((value) => {
        return <p key={value}>{value}</p>
      })}
    </div>
  )
}
