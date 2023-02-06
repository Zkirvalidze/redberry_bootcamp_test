import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';
const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <TextField
        fullWidth
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    </>
  );
};

export default InputField;
