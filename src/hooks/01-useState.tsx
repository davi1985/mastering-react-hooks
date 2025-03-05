import { Button } from '@/components/ui/button'
import { useState } from 'react'

export const State = () => {
  const [user, setUser] = useState<any>(() => {
    const cacheUser = localStorage.getItem('user')

    if (!cacheUser) {
      return null
    }

    return JSON.parse(cacheUser)
  })
  const [counter, setCounter] = useState(0)

  const handlePlus = () => setCounter((prev) => prev + 1)
  const handleMinus = () => setCounter((prev) => prev - 1)
  const handleReset = () => setCounter(0)

  return (
    <div className="space-x-1">
      <h1>Counter: {counter}</h1>

      <Button onClick={handlePlus}>+</Button>
      <Button onClick={handlePlus}>+</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  )
}
