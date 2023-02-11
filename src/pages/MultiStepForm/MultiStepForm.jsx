import { useState, useEffect, Children } from 'react';
import { Formik, Form } from 'formik';
import { Persist } from 'formik-persist';
import { Button } from '@mui/material';
import { INITIAL_VALUES } from '../../data/Constants';
import axios from 'axios';

/* Steps */
import ProfileInfoStep from './profile-info-step/ProfileInfoStep';
import ExperienceStep from './experience-step/ExperienceStep';
import EducationStep from './education-step/EducationStep';

/* Schemas */
import { PROFILE_INFO_SCHEMA } from './profile-info-step/schema/profile-info.schema';
import { EDUCATIONS_SCHEMA } from './education-step/schema/Education.schema';
import { EXPERIANCE_SCHEMA } from './experience-step/schema/experience.schema';
import { buildFormData } from '../../utils/formdata.utils';

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

  const postFormData = (formValues) => {
    let formData = new FormData();
    formData = buildFormData(formData, formValues);
    axios
      .post('https://resume.redberryinternship.ge/api/cvs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      console.log('submiting', values);
      postFormData(values);
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
      {(props) => (
        <Form className="pl-[150px]">
          {currrentChild}
          <div className="flex justify-between max-w-[56%]">
            <div>
              {activeStep !== 0 && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={_handleBack}
                >
                  Back
                </Button>
              )}
            </div>
            <div>
              <Button type="submit" variant="contained" color="primary">
                {isLastStep ? 'submit' : 'შემდეგი'}
              </Button>
            </div>
          </div>

          <Persist name="form" />
        </Form>
      )}
    </Formik>
  );
}
