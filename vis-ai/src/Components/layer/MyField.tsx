import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import { TextFieldProps } from "material-ui";
import * as React from "react";

interface Props extends FieldProps, TextFieldProps {
  label: string;
  placeholder: string;
}

export const MyField: React.FC<Props> = ({ label, placeholder, field }) => {
  return <TextField label={label} placeholder={placeholder} {...field} />;
};

export default MyField;
