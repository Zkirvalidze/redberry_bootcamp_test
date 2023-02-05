import React from 'react';
import DatePicker from './DatePicker';
import BaseFileUploadSingle from './FIleUploadSingle';
import Input from './Input';
import Textarea from './Textarea';
function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'upload-single':
      return <BaseFileUploadSingle {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
    case 'radio':
    case 'checkbox':
    case 'date': 
    return <DatePicker {...rest}/>
    default:
      return null;
  }
}

export default FormikControl;
