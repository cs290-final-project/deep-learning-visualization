import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  FormControl,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import MyField from "./MyField";
import MySlider from "./MySlider";

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

interface Props {
  onSubmit: (values: Values) => void;
}

const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ type: "Conv2d", width: 128, activation: "ReLU" }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div style={formContainerStyle}>
            <FormControl style={formItem}>
              <InputLabel>Layer Type</InputLabel>
              <Field as={Select} name="type">
                <MenuItem value="">None</MenuItem>
                <MenuItem value={"Conv2d"}>Conv2d</MenuItem>
                <MenuItem value={"Linear"}>Linear</MenuItem>
                <MenuItem value={"MaxPool2d"}>MaxPool2d</MenuItem>
              </Field>
            </FormControl>

            <FormControl style={formItem}>
              <Field name="width" component={MyField} label="Width" />
            </FormControl>

            <FormControl style={formItem}>
              <InputLabel>Activation</InputLabel>
              <Field as={Select} name="activation">
                <MenuItem value="">None</MenuItem>
                <MenuItem value={"ReLU"}>ReLU</MenuItem>
                <MenuItem value={"Sigmoid"}>Sigmoid</MenuItem>
                <MenuItem value={"Softmax"}>Softmax</MenuItem>
              </Field>
            </FormControl>
          </div>

          {/* <Button type="submit">submit</Button> */}
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
