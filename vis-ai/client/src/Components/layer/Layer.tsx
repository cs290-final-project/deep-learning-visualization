import React, { useRef } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import ItemTypes from "./ItemTypes";
import { XYCoord } from "dnd-core";
import MyForm from "./MyForm";

const style = {
  border: "1px dashed gray",
  padding: "0.5rem .5rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
};

export interface LayerProps {
  id: any;
  type: string;
  index: number;
  width: number;
  activation: string;
  moveLayer: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}
const Layer: React.FC<LayerProps> = ({
  id,
  type,
  index,
  width,
  activation,
  moveLayer,
}) => {
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
    <div style={{ alignContent: "center" }}>
      <div ref={ref} style={{ ...style, opacity }}>
        <h1>Layer {id}</h1>
        <MyForm
          onSubmit={({ type }) => {
            console.log(type);
          }}
        />
        {/* <h1>{type}</h1>
        <p>{width}</p>
        <p>{activation}</p> */}
      </div>
    </div>
  );
};

export default Layer;
