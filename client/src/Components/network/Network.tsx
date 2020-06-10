import update from "immutability-helper";
import React, { useCallback, useState } from "react";
import Layer from "../layer/Layer";
import CustomizedSnackbars from "./Snackbar";
import { Container, Row, Col } from "react-bootstrap";
import { ExpansionPanelActions, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Button, IconButton, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Axios from "axios";
import { Field, Formik } from "formik";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const formStyle = {
    boxShadow: "0px 0px 12px rgba(0,0,0,0.15)",
    padding: "0px 15px",
} as React.CSSProperties;

const buttonStyle = {
    backgroundColor: "#e8243c",
    cursor: "pointer",
    color: "#fff",
    boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.25)",
    height: 35,
    width: 35,
    marginLeft: 15,
    marginBottom: 0,
    marginTop: 15,
};

const redText = { color: "#e8243c" } as React.CSSProperties;

export interface Item {
    id: number;
    type: string;
    width: number;
    activation: string;
}

export interface NetworkState {
    name: string;
    creator: string;
    description: string;
    layers: Item[];
}

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



    return (
        <div>
            <Container>

                <Col md={6} style={{ marginTop: 10 }}>
                    <ExpansionPanel defaultExpanded style={formStyle}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">

                            <h3>Network: {layers.length} Layers</h3>
                            <IconButton onClick={addLayer} style={buttonStyle}>
                                <AddIcon />
                            </IconButton>

                        </ExpansionPanelSummary>

                        <ExpansionPanelDetails>


                            <Formik initialValues={{ title: '', description: '', creator: '', saved: false }} onSubmit={(data, { setSubmitting }) => {
                                setSnackBar(false);
                                const newNetwork = {
                                    name: data.title,
                                    description: data.description,
                                    creator: data.creator,
                                    layers: layers
                                };
                                if (formState) {
                                    Axios({
                                        url: `/api/networks/${formState}`,
                                        method: 'DELETE',
                                    })
                                        .catch(() => {
                                            alert("Could not update, error communicating with server");
                                        })
                                }
                                Axios({
                                    url: '/api/networks',
                                    method: 'POST',
                                    data: newNetwork,
                                    responseType: 'stream'
                                })
                                    .then((response) => {
                                        setForm(response.data._id);
                                        setSnackBar(true);
                                        setSubmitting(false);

                                    })
                                    .catch(() => {
                                        alert("Could not save, error communicating with server");
                                    })
                            }}>

                                {(({ values, handleChange, isSubmitting, handleBlur, handleSubmit }) =>
                                    <form onSubmit={handleSubmit}>

                                        <h4 style={redText}>{formState ? "Update your model" : "Save your model"}</h4>
                                        <p>Share your creation with other members on the networks community page.</p>
                                        <Field disabled={isSubmitting} required="true" label="Network Title" name="title" as={TextField} fullWidth variant="outlined" margin='normal' />
                                        <Field disabled={isSubmitting} label="Creator" name="creator" as={TextField} fullWidth variant="outlined" margin='normal' />
                                        <Field disabled={isSubmitting} multiline label="Description" name="description" rows={3} as={TextField} fullWidth variant="outlined" margin='normal' />
                                        <ExpansionPanelActions>
                                            <Button variant="contained" size="large" style={{ color: "#fff", backgroundColor: "#e8243c" }} disabled={isSubmitting} type="submit">{(formState) ? "Update Net" : "Save Net"}</Button>
                                        </ExpansionPanelActions>

                                        {(snackBarState) && <CustomizedSnackbars />}
                                    </form>

                                )}</Formik>
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