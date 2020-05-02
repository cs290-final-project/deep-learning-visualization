import React, { useRef } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import ItemTypes from "../ItemTypes";
import { XYCoord } from "dnd-core";

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
};

export interface LayerProps {
  id: any;
  index: number;
  type: string;
  width: number;
  activation: string;
  moveLayer: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const Layer: React.FC<LayerProps> = ({ id, type, index, moveLayer }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ItemTypes.LAYER,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current!.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveLayer(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.LAYER, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} style={{ ...style, opacity }}>
      {type}
    </div>
  );
};

export default Layer;
// const PRIMARY_COLOR = "blue";

// interface IProps {
//   modifyWidthBy: number;
// }

// interface IState {
//   type: string;
//   width: number;
//   activation: string;
//   description: string;
// }

// class Layer extends React.Component<IProps, IState> {
//   public static defaultProps: Partial<IProps> = {
//     // The width of a given layer will be adjusted by 10 when a user
//     // Does something in the U.I. Maybe a button press??
//     modifyWidthBy: 100,
//   };

//   public state: IState = {
//     type: "Conv2d",
//     width: 128,
//     activation: "ReLU",
//     description: "A layer in a neural network",
//   };

//   public increaseWidth = () => {
//     const modifyWidthBy: number = this.props.modifyWidthBy!;
//     const width = this.state.width + modifyWidthBy;
//     this.setState({ width });
//   };

//   public decreaseWidth = () => {
//     const modifyWidthBy: number = this.props.modifyWidthBy!;
//     const width = this.state.width - modifyWidthBy;
//     this.setState({ width });
//   };

//   public render() {
//     return (
//       <div>
//         <h1>Layer Type: {this.state.type}</h1>
//         <h1>Layer Width: {this.state.width}</h1>
//         <button onClick={this.increaseWidth}>Increase Width</button>
//         <button onClick={this.decreaseWidth}>Decrease Layer Width</button>
//         <h3>Activation Function: {this.state.activation}</h3>
//         <p>Layer Description: {this.state.description}</p>
//       </div>
//     );
//   }
// }

// export default Layer;
