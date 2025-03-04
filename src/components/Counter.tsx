import React, { ReactNode } from 'react'
import { Button } from './ui/button'
import { Card } from './Card'
import { withAuthorization } from '@/hocs/withAuthorization'
import { VisibilityController } from './VisibilityController'

interface IProps {
  title: string
  userRole: string
}

interface IState {
  counter: number
  isLoading: boolean
}

class CounterComponent extends React.Component<IProps, IState> {
  state: Readonly<IState> = {
    counter: 0,
    isLoading: false,
  }

  constructor(props: IProps) {
    super(props)
    this.handlePlus = this.handlePlus.bind(this)
    this.handleMinus = this.handleMinus.bind(this)
  }

  handlePlus() {
    this.setState({ counter: this.state.counter + 1 })
  }
  handleMinus() {
    this.setState({ counter: this.state.counter - 1 })
  }

  async componentDidMount(): Promise<void> {
    this.setState({ isLoading: true })

    window.addEventListener('resize', this.handleResize)

    await new Promise((resolve) => setTimeout(resolve, 20))

    this.setState({ isLoading: false })
  }

  componentDidUpdate(_: Readonly<IProps>, prevState: Readonly<IState>): void {
    console.log({
      previous: prevState,
      current: this.state,
    })
  }

  handleResize() {
    console.log('window resized...')
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log({ error, errorInfo })
  }

  render(): ReactNode {
    return (
      <Card title="Counter">
        <VisibilityController>
          {({ isVisible, toggle }) => (
            <div className="mb-10 flex justify-between items-center">
              <h1>Saldo atual: {isVisible ? this.state.counter : '*******'}</h1>

              <Button variant={'outline'} onClick={toggle}>
                {isVisible ? 'Esconder' : 'Mostrar'}
              </Button>
            </div>
          )}
        </VisibilityController>

        <div className="space-x-1">
          <Button onClick={this.handlePlus}>+</Button>
          <Button onClick={this.handleMinus}>-</Button>
        </div>
      </Card>
    )
  }
}

export const Counter = withAuthorization(CounterComponent, ['admin'])
