import React, { useState } from 'react';
import { Formik, Form } from 'formik';
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
  boobs: '',
  personalInfo: {
    name: '',
    surname: '',
    image: '',
    phone: '',
    aboutUs: '',
    email: '',
  },
  eduction: {
    position: '',
    employer: '',
    startDate: null,
    endDate: null,
  },
};
export const fieldStyle =
  'border-solid border-2 rounded-sm border-black h-16 p-4   ';

const PersonalInfoForm = () => {
  return (
    <Grid container>
      <Box px="150px">
        <FormHeader headerText={'ჩვენს შესახებ'} pageNumber={1} />
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
      </Box>

      {/* <Resume  /> */}
    </Grid>
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
      {(formik) => (
        <Form className="flex justify-center flex-col">
          <FormikPersist name="FormName" /> // this line headerText
          {currrentChild}
          <Box
            display="flex"
            justifyContent="flex-end"
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
