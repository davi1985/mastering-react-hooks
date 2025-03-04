import { Counter } from './components/Counter'

export const App = () => (
  <div className="min-h-screen grid place-items-center">
    <div className="w-full max-w-sm">
      <Counter title="Counter #1" userRole="admin" />
    </div>
  </div>
)
