import { FormControl, TextField, Select, InputLabel, MenuItem } from "@material-ui/core";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
import { Field, Form, Formik, FieldProps } from "formik";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from "react";
import "../../index.css";

interface Values {
    type: string;
    width: number;
    activation: string;
}

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
            <FormControl className="formItem">
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
                <Form>
                    <ExpansionPanel defaultExpanded className="layerForm">
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <h4>{values.type}  {values.width}  {values.activation}</h4>
                        </ExpansionPanelSummary>

                        <ExpansionPanelDetails style={{ display: "block" }}>
                            <div className="formContainer">
                                {renderSelector("type", types)}
                                <FormControl className="formItem">
                                    <Field name="width" render={(props: FieldProps) => {
                                        return <TextField color="primary" label={"Width"} {...props.field} />;
                                    }} />
                                </FormControl>
                                {renderSelector("activation", funcs)}
                            </div>
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Form>
            )}
        </Formik>
    );
};

export default LayerForm;
