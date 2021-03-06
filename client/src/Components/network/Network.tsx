import {
  Button,
  ExpansionPanel,
  ExpansionPanelActions,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControlLabel,
  IconButton,
  TextField,
} from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import GetApp from "@material-ui/icons/GetApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Remove from "@material-ui/icons/Remove";
import Axios from "axios";
import { Field, Formik } from "formik";
import update from "immutability-helper";
import React, { useCallback, useState } from "react";
import { Col, Container } from "react-bootstrap";
import "../../index.css";
import Layer from "../layer/Layer";
import CustomizedSnackbars from "./Snackbar";

const Network: React.FC = () => {
  const [NetworkState, setNetworkState] = useState();
  const [formState, setForm] = useState(false);
  const [snackBarState, setSnackBar] = useState(false);
  const [layers, setLayers] = useState([
    {
      id: 1,
      type: "Conv2d",
      width: 128,
      activation: "ReLU",
    },
    {
      id: 2,
      type: "MaxPool2d",
      width: 64,
      activation: "Sigmoid",
    },
    {
      id: 3,
      type: "Linear",
      width: 10,
      activation: "Softmax",
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

  const addLayer = () => {
    const newLayer = {
      id: layers.length + 1,
      type: "Conv2d",
      width: 128,
      activation: "ReLU",
    };
    setLayers([...layers, newLayer]);
  };

  const removeLayer = () => {
    layers.splice(-1, 1);
    console.log(layers.length);
    setLayers([...layers]);
  };

  const downloadNetwork = () => {
    window.open(
      "https://gist.github.com/ShaurGaur/e10a85d25161daf05d1f74536f1fe8bf/archive/ce353ad3799a3651754efb1f9456a8d02efa7bde.zip"
    );
  };

  return (
    <div>
      <Container>
        <Col md={6} style={{ marginTop: 10 }}>
          <ExpansionPanel defaultExpanded className="networkForm">
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              {/* CREATE NEW LAYERS */}
              <FormControlLabel
                aria-label="Add Layer"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                  <IconButton onClick={addLayer} className="NetworkButton">
                    <Add fontSize="large" />
                  </IconButton>
                }
                label=""
              />
              {/* REMOVE LAYERS */}
              <FormControlLabel
                aria-label="Remove Layer"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                  <IconButton onClick={removeLayer} className="NetworkButton">
                    <Remove fontSize="large" />
                  </IconButton>
                }
                label=""
              />
              {/* REMOVE LAYERS */}
              <FormControlLabel
                aria-label="Download Network"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                  <IconButton
                    onClick={downloadNetwork}
                    className="NetworkButton"
                  >
                    <GetApp fontSize="large" />
                  </IconButton>
                }
                label=""
              />
              <h3>Network: {layers.length} Layers</h3>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Formik
                initialValues={{
                  title: "",
                  description: "",
                  creator: "",
                  saved: false,
                }}
                onSubmit={(data, { setSubmitting }) => {
                  setSnackBar(false);
                  const newNetwork = {
                    name: data.title,
                    description: data.description,
                    creator: data.creator,
                    layers: layers,
                  };
                  if (formState) {
                    Axios({
                      url: `/api/networks/${formState}`,
                      method: "DELETE",
                    }).catch(() => {
                      alert(
                        "Could not update, error communicating with server"
                      );
                    });
                  }
                  Axios({
                    url: "/api/networks",
                    method: "POST",
                    data: newNetwork,
                    responseType: "stream",
                  })
                    .then((response) => {
                      setForm(response.data._id);
                      setSnackBar(true);
                      setSubmitting(false);
                    })
                    .catch(() => {
                      alert("Could not save, error communicating with server");
                    });
                }}
              >
                {({
                  values,
                  handleChange,
                  isSubmitting,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <h4 className="red">
                      {formState ? "Update your model" : "Save your model"}
                    </h4>
                    <p>
                      Share your creation with other members on the networks
                      community page.
                    </p>
                    <Field
                      disabled={isSubmitting}
                      required="true"
                      label="Network Title"
                      name="title"
                      as={TextField}
                      fullWidth
                      margin="normal"
                    />
                    <Field
                      disabled={isSubmitting}
                      required="true"
                      label="Creator"
                      name="creator"
                      as={TextField}
                      fullWidth
                      margin="normal"
                    />
                    <Field
                      disabled={isSubmitting}
                      multiline
                      label="Description"
                      name="description"
                      rows={3}
                      as={TextField}
                      fullWidth
                      margin="normal"
                    />
                    <ExpansionPanelActions>
                      <Button
                        className="materialButton"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        {formState ? "Update Network" : "Save Network"}
                      </Button>
                    </ExpansionPanelActions>

                    {snackBarState && <CustomizedSnackbars />}
                  </form>
                )}
              </Formik>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Col>
        <Col md={6} id="layerContainer">
          {layers.map((layer, i) => renderLayer(layer, i))}
        </Col>
      </Container>
    </div>
  );
};

export default Network;
