import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, ErrorMessage } from 'formik';
const DatePicker = (props) => {
  const { label, name, ...rest } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ form, field }) => {
            console.log(form,'form',field,'field')
          const { setFieldValue } = form;
          const {value} = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
            //   dateFormat="MM-DD-YYYY"
              placeholderText="MM-DD-YYYY"
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} />
    </>
  );
};

export default DatePicker;
