import { Button, Select, MenuItem, InputLabel, Grid } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import MyField from "./MyField";
import MySlider from "./MySlider";

interface Values {
  type: string;
  width: number;
  activation: string;
}

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
          <div>
            <InputLabel shrink>Layer Type</InputLabel>
            <Field as={Select} name="type" label="Layer Type">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Conv2d"}>Conv2d</MenuItem>
              <MenuItem value={"Linear"}>Linear</MenuItem>
              <MenuItem value={"MaxPool2d"}>MaxPool2d</MenuItem>
            </Field>
          </div>
          <div>
            <InputLabel shrink>Layer Width</InputLabel>
            <Field name="width" label="Layer Width" component={MyField} />
          </div>
          <div>
            {/* <Field
              name="activation"
              placeholder="Activation"
              component={MyField}
            /> */}
            <InputLabel shrink>Activation Function</InputLabel>
            <Field as={Select} name="activation" label="Choose an Activation">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"ReLU"}>ReLU</MenuItem>
              <MenuItem value={"Sigmoid"}>Sigmoid</MenuItem>
              <MenuItem value={"Softmax"}>Softmax</MenuItem>
            </Field>
          </div>

          {/* <Button type="submit">submit</Button> */}
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
