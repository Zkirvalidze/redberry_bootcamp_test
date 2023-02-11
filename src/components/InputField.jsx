import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import InputAdornment from '@mui/material/InputAdornment';

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const adornmentLogic = meta.touched
    ? field.value && !meta.error
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
    : null;
  return (
    <>
      <label
        htmlFor={field.name}
        style={meta.touched && meta.error ? { color: 'red' } : {}}
      >
        {label}
      </label>
      <TextField
        fullWidth
        InputProps={adornmentLogic}
        sx={
          !meta.error && field.value && meta.touched
            ? {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'green ',
                  },
                },
              }
            : null
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
