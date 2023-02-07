import React, { useState, useRef } from 'react';
import { Formik, Form, useFormikContext } from 'formik';
import { Box, Button, Grid } from '@mui/material';

import { VALIDATION_SCHEMA } from './schema/profile-info.schema';
import { STEP_TWO_SCHEMA } from './schema/StepTwo.schema';
import BaseFileUploadSingle from '../../components/FIleUploadSingle';

import StepOne from '../../components/StepOne';
import StepTwo from '../../components/StepTwo';
import FormikPersist from '../FormikPersistor';

const INITIAL_VALUES = {
  personalInfo: {
    name: '',
    surname: '',
    image: '',
    phone: '',
    aboutUs: '',
    email: '',
  },

  educations: [
    {
      position: '',
      employer: '',
      startDate: null,
      endDate: null,
      description: '',
    },
  ],
};

const PersonalInfoForm = () => {
  return (
    <Box pl="150px">
      <FormikStepper enableReinitialize>
        <StepOne validationSchema={VALIDATION_SCHEMA} />
        <StepTwo validationSchema={STEP_TWO_SCHEMA} />
      </FormikStepper>
    </Box>
  );
};
export default PersonalInfoForm;

export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currrentChild = childrenArray[step];

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };
  const handleSubmit = () => {
    if (isLastStep()) {
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <Formik
      {...props}
      validationSchema={currrentChild.props.validationSchema}
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
    >
      <Form className="flex justify-center flex-col">
        <FormikPersist name="FormName" />
        {currrentChild}
        <Box display="flex" justifyContent="flex-start" mt="20px">
          <Button variant="contained" type="submit">
            {isLastStep() ? 'submit' : 'შემდეგი'}
          </Button>
        </Box>
      </Form>
    </Formik>
  );
}
