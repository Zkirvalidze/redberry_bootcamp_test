import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { makeStyles } from '@material-ui/core/styles';

import InputAdornment from '@mui/material/InputAdornment';

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <>
      <label
        htmlFor={props.name}
        style={meta.touched && meta.error ? { color: 'red' } : {}}
      >
        {label}
      </label>
      <TextField
        fullWidth
        InputProps={
          field.value && !meta.error && meta.touched
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <CheckCircleOutlineIcon color="success" />
                  </InputAdornment>
                ),
              }
            : {
                endAdornment: (
                  <InputAdornment position="end">
                    <ReportProblemOutlinedIcon color="warning" />
                  </InputAdornment>
                ),
              }
        }
        sx={
          !meta.error &&
          meta.touched && {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'green ',
              },
            },
          }
        }
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    </>
  );
};

export default InputField;
