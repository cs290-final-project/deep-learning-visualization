import { FormControl, TextField, Select, InputLabel, MenuItem } from "@material-ui/core";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
import { Field, Form, Formik, FieldProps } from "formik";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from "react";
import { Row } from "react-bootstrap";

interface Values {
    type: string;
    width: number;
    activation: string;
}

const formItem = {
    color: "#fff",
    width: "33%",
    margin: 10,
};

const style = {
    //border: "1px dashed gray",
    //padding: "1.0rem 1.0rem",
    //backgroundColor: "grey",
    marginBottom: "0.5rem",
    color: "#e8243c",
    backgroundColor: "#fff",
    cursor: "move",
    transition: "0.25s",
    display: "flex",
    flexDirection: "column",
    flexShrink: 1,
    flexGrow: 0,
    flexBasis: 360,
    margin: 10,
    padding: "0px 15px 0px 15px",
    boxShadow: "0px 0px 12px rgba(0,0,0,0.15)",

} as React.CSSProperties;

const formContainerStyle = {
    display: "flex",
    flex: "row wrap",
    justifyContent: "center",
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,

    flexShrink: 1,
    flexGrow: 0,
    flexBasis: 360,
};

const funcs = ["ReLU", "Sigmoid", "Softmax"];
const types = ["Conv2d", "MaxPool2d", "Linear"];

interface Props {
    initialValues: {
        type: string;
        width: number;
        activation: string;
    };
    onSubmit: (values: Values) => void;
}

const LayerForm: React.FC<Props> = ({ initialValues, onSubmit }) => {

    const renderSelector = (name: string, options: string[]) => {
        return (
            <FormControl style={formItem}>
                <InputLabel>{name.charAt(0).toUpperCase() + name.slice(1)}</InputLabel>
                <Field as={Select} name={name}>
                    {options.map((option, i) => {
                        return <MenuItem value={option}>{option}</MenuItem>;
                    })}
                    <MenuItem value="">None</MenuItem>
                </Field>
            </FormControl>
        );
    }

    return (
        <Formik initialValues={initialValues} onSubmit={(values) => { onSubmit(values); }}>
            {({ values }) => (
                <Form style={{ width: "100%" }}>
                    <ExpansionPanel defaultExpanded style={{ ...style }}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <h4>{values.type}  {values.width}  {values.activation}</h4>
                        </ExpansionPanelSummary>

                        <ExpansionPanelDetails style={{ display: "block" }}>
                            <div style={formContainerStyle}>
                                {renderSelector("type", types)}
                                <FormControl style={formItem}>
                                    <Field name="width" render={(props: FieldProps) => {
                                        return <TextField color="primary" label={"Width"} {...props.field} />;
                                    }} />
                                </FormControl>
                                {renderSelector("activation", funcs)}
                            </div>
                            <pre style={{ margin: 5, }}>{JSON.stringify(values, null, 2)}</pre>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Form>
            )}
        </Formik>
    );
};

export default LayerForm;
