import { FormControl, Select, InputLabel, MenuItem } from "@material-ui/core";
import { Field } from "formik";
import * as React from "react";

export interface SelectProps {
  name: string;
  options: string[];
  style: object;
}

const MySelect: React.FC<SelectProps> = ({ name, options, style }) => {
  return (
    <FormControl style={style}>
      <InputLabel>Layer Type</InputLabel>
      <Field as={Select} name={name}>
        {options.map((option, i) => {
          return <MenuItem value={option}>{option}</MenuItem>;
        })}
        <MenuItem value="">None</MenuItem>
      </Field>
    </FormControl>
  );
};

export default MySelect;
