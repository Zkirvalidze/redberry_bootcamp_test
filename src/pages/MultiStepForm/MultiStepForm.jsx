import { useState, useEffect, Children } from 'react';
import { Formik, Form } from 'formik';
import { Persist } from 'formik-persist';
import { Button } from '@mui/material';
// import BaseFileUploadSingle from '../../components/FIleUploadSingle';
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
  const [activeStep, setActiveStep] = useState(
    JSON.parse(localStorage.getItem('activeStep')) || 0
  );
  useEffect(() => {
    localStorage.setItem('activeStep', JSON.stringify(activeStep));
  }, [activeStep]);

  const childrenArray = Children.toArray(children);
  const currrentChild = childrenArray[activeStep];

  const isLastStep = activeStep === childrenArray.length - 1;

  function _submitForm(values, actions) {
    const postData = async (val) => {
      const postForm = await fetch(
        'https://resume.redberryinternship.ge/api/cvs',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(val),
        }
      );
      const resp = await response.json();
      console.log(values);
    };
    postData(values);
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      console.log('submiting')
      _submitForm(values, actions);
    } else {
      setActiveStep((prev) => prev + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep((prev) => prev - 1);
  }

  return (
    <Formik
      {...props}
      validationSchema={currrentChild.props.validationSchema}
      initialValues={INITIAL_VALUES}
      onSubmit={_handleSubmit}
    >
      <Form className="pl-[150px]">
        {currrentChild}
        <div className="flex justify-between max-w-[56%]">
          <div>
            {activeStep !== 0 && <Button onClick={_handleBack}>Back</Button>}
          </div>
          <div>
            <Button type="submit" variant="contained" color="primary">
              {isLastStep ? 'submit' : 'შემდეგი'}
            </Button>
          </div>
        </div>

        <Persist name="form" />
      </Form>
    </Formik>
  );
}
