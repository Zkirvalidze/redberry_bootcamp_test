import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Textarea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <>
      <label htmlFor={name} >{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} />
    </>
  );
};

export default Textarea;
