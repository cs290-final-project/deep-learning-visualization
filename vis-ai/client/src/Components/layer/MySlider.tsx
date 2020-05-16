import { Slider, Input, Grid, makeStyles } from "@material-ui/core";
import { FieldProps, useField } from "formik";
import { TextFieldProps } from "material-ui";
import * as React from "react";

const styles = makeStyles({
  slider: {
    width: 300,
  },
  input: {
    width: 50,
  },
});

interface Props extends FieldProps, TextFieldProps {
  field: any;
  label: string;
  placeholder: string;
}

// Formik doesn't really like to play nice with Material UI's sliders
// God bless the Slider Component Documentation: https://material-ui.com/components/slider/#InputSlider.tsx
export const MySlider: React.FC<Props> = ({ field, label, placeholder }) => {
  //   return <TextField label={label} placeholder={placeholder} {...field} />;
  const itemStyles = styles();
  const [value, setValue] = React.useState<
    number | string | Array<number | string>
  >(128);

  function inputAdjust(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  }

  return (
    //     <Grid container spacing={2}>
    //       <Grid item>
    <React.Fragment>
      <Slider
        {...field}
        className={itemStyles.slider}
        value={typeof value === "number" ? value : 0}
        min={0}
        max={1024}
        onChange={(event: any, newValue: number | number[]) =>
          setValue(newValue)
        }
      />
    </React.Fragment>
    //   </Grid>
    //   <Grid item>
    //     <Input
    //       className={itemStyles.input}
    //       value={value}
    //       onChange={inputAdjust}
    //       inputProps={{ step: 32, min: 0, max: 1024, type: "number" }}
    //     />
    //   </Grid>
    // </Grid>
  );
};

export default MySlider;
