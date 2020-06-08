import { FormControl, TextField, Select, InputLabel, MenuItem } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import { render } from "@testing-library/react";

interface Values {
    type: string;
    width: number;
    activation: string;
}

const formItem = {
    width: 130,
    margin: 10,
};

const formContainerStyle = {
    display: "flex",
    flex: "row wrap",
    justifyContent: "center",
    padding: 10,
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
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                onSubmit(values);
            }}
        >
            {({ values }) => (
                <Form>
                    <div style={formContainerStyle}>
                        {renderSelector("type", types)}
                        <FormControl style={formItem}>
                            <Field name="width" render={( {placeholder} : { placeholder: string}, {field} : { field: any} ) => {
                                return <TextField label={"Width"} placeholder={placeholder} {...field} />;
                            }} />
                        </FormControl>
                        {renderSelector("activation", funcs)}
                    </div>
                    {/* <Button type="submit">submit</Button> */}
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    );
};

export default LayerForm;
