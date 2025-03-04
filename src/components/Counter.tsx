import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { Card } from "./Card";

interface IProps {
  title: string;
}

interface IState {
  counter: number;
  isLoading: boolean;
}

export class Counter extends React.Component<IProps, IState> {
  state: Readonly<IState> = {
    counter: 0,
    isLoading: false,
  };

  handleChangeCounter(value: 1 | -1) {
    this.setState({ counter: this.state.counter + value });
  }

  async componentDidMount(): Promise<void> {
    this.setState({ isLoading: true });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    this.setState({ isLoading: false });
  }

  render(): ReactNode {
    return (
      <Card title="Counter">
        <h1>Valor atual: {this.state.counter}</h1>

        <div className="space-x-1">
          <Button onClick={() => this.handleChangeCounter(1)}>+</Button>
          <Button onClick={() => this.handleChangeCounter(-1)}>-</Button>
        </div>
      </Card>
    );
  }
}
