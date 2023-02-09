import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Box, Button } from '@mui/material';
import BaseFileUploadSingle from '../../components/FIleUploadSingle';

import FormikPersist from '../FormikPersistor';

import { INITIAL_VALUES } from '../../data/Constants';

/* Steps */
import ProfileInfoStep from './profile-info-step/ProfileInfoStep';
import ExperienceStep from './experience-step/ExperienceStep';
import EducationStep from './education-step/EducationStep';

/* Schemas */
import { PROFILE_INFO_SCHEMA } from './profile-info-step/schema/profile-info.schema';
import { EDUCATIONS_SCHEMA } from './education-step/schema/Education.schema';
import { EXPERIANCE_SCHEMA } from './experience-step/schema/experience.schema';

const MultiStepForm = () => {
  return (
    <FormikStepper enableReinitialize>
      <ProfileInfoStep validationSchema={PROFILE_INFO_SCHEMA} />
      <ExperienceStep validationSchema={EXPERIANCE_SCHEMA} />
      <EducationStep validationSchema={EDUCATIONS_SCHEMA} />
    </FormikStepper>
  );
};
export default MultiStepForm;

export function FormikStepper({ children, ...props }) {
  const [step, setStep] = useState(0);

  const childrenArray = React.Children.toArray(children);
  const currrentChild = childrenArray[step];

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  const handleSubmit = () => {
    if (isLastStep()) {
      console.log('submit');
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
      <Form className="pl-[150px]">
        <FormikPersist name="FormName" />
        {currrentChild}
        <Box mt="20px" display="flex" justifyContent="flex-start">
          <Button variant="contained" type="submit">
            {FormikStepper.isLastStep ? 'submit' : 'შემდეგი'}
          </Button>
        </Box>
      </Form>
    </Formik>
  );
}
