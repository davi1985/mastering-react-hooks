import React from 'react'

type Params = {
  isVisible: boolean
  toggle: () => void
}
interface IProps {
  children: (params: Params) => React.ReactNode
}

interface IState {
  isVisible: boolean
}

export class VisibilityController extends React.Component<IProps, IState> {
  state: Readonly<IState> = {
    isVisible: true,
  }

  toggle = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }))
  }

  render(): React.ReactNode {
    return this.props.children({
      isVisible: this.state.isVisible,
      toggle: this.toggle,
    })
  }
}
