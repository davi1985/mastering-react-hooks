import { Button } from '@/components/ui/button'
import { useState } from 'react'

type User = {
  id: number
  name: string
  age: number
}

export const Reducer = () => {
  const [user, setUser] = useState<User>({
    id: Date.now(),
    name: 'Davi',
    age: 39,
  })
  const [isUnderage, setIsUnderage] = useState(false)

  const handleChangeUser = () => {
    const age = 17
    setUser((prevState) => ({
      ...prevState,
      name: 'Davi Silva',
      age,
    }))

    setIsUnderage(age < 18)
  }

  const handleRefreshAge = () => {
    const age = 40
    setUser((prevState) => ({
      ...prevState,
      age,
    }))

    setIsUnderage(age < 18)
  }

  return (
    <div className="space-x-1">
      <h1>Counter: {user.name}</h1>
      <h2>Idade: {user.age}</h2>
      <h3>Menor de idade: {isUnderage ? 'Sim' : 'Não'}</h3>

      <Button onClick={handleChangeUser}>Trocar usuário</Button>
      <Button onClick={handleRefreshAge}>Atualizar idade</Button>
    </div>
  )
}
