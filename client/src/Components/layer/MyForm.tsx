import { FormControl } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import MyField from "./MyField";
import MySelect from "./MySelect";

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

const MyForm: React.FC<Props> = ({ initialValues, onSubmit }) => {
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
            <MySelect name={"type"} options={types} style={formItem} />

            <FormControl style={formItem}>
              <Field name="width" component={MyField} label="Width" />
            </FormControl>

            <MySelect name={"activation"} options={funcs} style={formItem} />
          </div>

          {/* <Button type="submit">submit</Button> */}
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
