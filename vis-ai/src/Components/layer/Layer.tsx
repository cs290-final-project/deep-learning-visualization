import * as React from "react";

const PRIMARY_COLOR = "blue";

interface IProps {
  modifyWidthBy: number;
}

interface IState {
  type: string;
  width: number;
  activation: string;
  description: string;
}

class Layer extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    // The width of a given layer will be adjusted by 10 when a user
    // Does something in the U.I. Maybe a button press??
    modifyWidthBy: 100,
  };

  public state: IState = {
    type: "Conv2d",
    width: 128,
    activation: "ReLU",
    description: "A layer in a neural network",
  };

  public increaseWidth = () => {
    const modifyWidthBy: number = this.props.modifyWidthBy!;
    const width = this.state.width + modifyWidthBy;
    this.setState({ width });
  };

  public decreaseWidth = () => {
    const modifyWidthBy: number = this.props.modifyWidthBy!;
    const width = this.state.width - modifyWidthBy;
    this.setState({ width });
  };

  public render() {
    return (
      <div>
        <h1>Layer Type: {this.state.type}</h1>
        <h1>Layer Width: {this.state.width}</h1>
        <button onClick={this.increaseWidth}>Increase Width</button>
        <button onClick={this.decreaseWidth}>Decrease Layer Width</button>
        <h3>Activation Function: {this.state.activation}</h3>
        <p>Layer Description: {this.state.description}</p>
      </div>
    );
  }
}

export default Layer;
