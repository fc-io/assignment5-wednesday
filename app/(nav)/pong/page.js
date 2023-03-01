'use client'
import {useAtom} from "jotai"
import pingPongAtom from '../pingPongAtom'

export default function Ping() {
  const [pingState, setPingState] = useAtom(pingPongAtom)

  const handleClick = () => {
    setPingState([...pingState, 'pong'])
  }

  const handleReset = () => {
    setPingState([])
  }

  return (
    <div>
      <h1>Pong</h1>
      <button onClick={(e) => handleClick(e)}>Pong it!</button>
      <button onClick={(e) => handleReset(e)}>Reset</button>
      {pingState.map((value) => {
        return <p key={value}>{value}</p>
      })}
    </div>
  )
}
