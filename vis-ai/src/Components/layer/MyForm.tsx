import { Button } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import MyField from "./MyField";

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
            <Field name="type" placeholder="Layer Type" component={MyField} />
          </div>
          <div>
            <Field name="width" placeholder="Layer Width" component={MyField} />
          </div>
          <div>
            <Field
              name="activation"
              placeholder="Activation"
              component={MyField}
            />
          </div>
          {/* <Button type="submit">submit</Button> */}
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
