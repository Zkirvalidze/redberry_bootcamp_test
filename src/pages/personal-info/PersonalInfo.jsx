import React, { useState, useRef } from 'react';
import { Formik, Form, useFormikContext } from 'formik';
import { Box, Button, Grid } from '@mui/material';

import { PROFILE_INFO_SCHEMA } from './schema/profile-info.schema';
import { STEP_TWO_SCHEMA } from './schema/StepTwo.schema';
import BaseFileUploadSingle from '../../components/FIleUploadSingle';
import Resume from '../../components/Resume';
import FormHeader from '../../components/FormHeader';

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

  education: [
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
  // const props=useFormikContext()
  return (
    <Box pl="150px">
      <FormikStepper enableReinitialize>
        <StepOne
          validationSchema={PROFILE_INFO_SCHEMA}
          // initialValues={INITIAL_VALUES.personalInfo}
        />
        <StepTwo
          validationSchema={STEP_TWO_SCHEMA}

          // initialValues={INITIAL_VALUES.eduction}
        />
      </FormikStepper>

      {/* <Resume  /> */}
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
      {(formik, values) => (
        <Form className="flex justify-center flex-col">
          {JSON.stringify(formik.values)}
          <FormikPersist name="FormName" />
          {currrentChild}
          <Box
            display="flex"
            justifyContent="flex-start"
            sx={{ marginTop: '20px' }}
          >
            <Button variant="contained" type="submit">
              {isLastStep() ? 'submit' : 'შემდეგი'}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
