import { Button } from '@/components/ui/button'
import { useReducer } from 'react'

type User = {
  id: number
  name: string
  age: number
}

type State = {
  user: User
  isUnderage: boolean
}

type Action =
  | { type: 'CHANGE_USER' }
  | { type: 'UPDATE_AGE'; payload: { age: number } }

const reducer = (prevState: State, action: Action) => {
  switch (action.type) {
    case 'CHANGE_USER': {
      const age = 57

      return {
        isUnderage: age < 18,
        user: {
          id: Date.now(),
          age,
          name: 'Davi Silva',
        },
      }
    }

    case 'UPDATE_AGE': {
      const { age } = action.payload

      return {
        isUnderage: age < 18,
        user: {
          ...prevState.user,
          age,
        },
      }
    }

    default:
      return prevState
  }
}

export const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    user: { id: Date.now(), name: 'Davi', age: 39 },
    isUnderage: false,
  })

  const handleChangeUser = () => dispatch({ type: 'CHANGE_USER' })
  const handleRefreshAge = () =>
    dispatch({ type: 'UPDATE_AGE', payload: { age: 17 } })

  return (
    <div className="space-x-1">
      <h1>Counter: {state.user.name}</h1>
      <h2>Idade: {state.user.age}</h2>
      <h3>Menor de idade: {state.isUnderage ? 'Sim' : 'Não'}</h3>

      <Button onClick={handleChangeUser}>Trocar usuário</Button>
      <Button onClick={handleRefreshAge}>Atualizar idade</Button>
    </div>
  )
}
