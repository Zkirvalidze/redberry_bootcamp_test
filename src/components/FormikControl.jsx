import React from 'react';
import BaseFileUploadSingle from './FIleUploadSingle';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'upload-single':
      return <BaseFileUploadSingle {...rest} />;

    case 'select':
    case 'radio':
    case 'checkbox':
    default:
      return null;
  }
}

export default FormikControl;
