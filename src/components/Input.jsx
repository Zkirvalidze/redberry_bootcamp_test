import React from 'react';
import { Field, ErrorMessage } from 'formik';
function Input(props) {

  const { label, name, ...rest } = props;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} />
    </>
  );
}

export default Input;
