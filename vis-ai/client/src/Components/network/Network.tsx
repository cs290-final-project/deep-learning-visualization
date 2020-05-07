import update from "immutability-helper";
import React, { useCallback, useState } from "react";
import Layer from "../layer/Layer";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";

const style = {
  width: 400,
};

export interface Item {
  id: number;
  type: string;
  width: number;
  activation: string;
}

export interface NetworkState {
  layers: Item[];
}

const Network: React.FC = () => {
  {
    const [layers, setLayers] = useState([
      {
        id: 1,
        type: "Conv2d",
        width: 128,
        activation: "ReLU",
      },
      {
        id: 2,
        type: "Conv2d",
        width: 128,
        activation: "ReLU",
      },
      {
        id: 3,
        type: "Conv2d",
        width: 128,
        activation: "ReLU",
      },
    ]);

    const moveLayer = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        const dragLayer = layers[dragIndex];
        setLayers(
          update(layers, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragLayer],
            ],
          })
        );
      },
      [layers]
    );

    const renderLayer = (
      layer: { id: number; type: string; width: number; activation: string },
      index: number
    ) => {
      return (
        <Layer
          key={layer.id}
          index={index}
          id={layer.id}
          type={layer.type}
          width={layer.width}
          activation={layer.activation}
          moveLayer={moveLayer}
        />
      );
    };

    return (
      <>
        <Container>
          <Col>
            <Row>
              <h1>Network</h1>
            </Row>
            <div style={style}>
              {layers.map((layer, i) => renderLayer(layer, i))}
            </div>
          </Col>
        </Container>
      </>
    );
  }
};

export default Network;
