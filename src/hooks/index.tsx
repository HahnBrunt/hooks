import React, { useState } from "react"

const Example = () => {
  const [count, setCount] = useState(0)
  console.log(setCount)

  const prevCount = (count: number, b: number) => count + b
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(prevCount(count, 2))}>+1</button>
    </div>
  )
}

export default Example
