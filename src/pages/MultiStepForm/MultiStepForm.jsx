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

  function toFormData(o) {
    return Object.entries(o).reduce(
      (d, e) => (d.append(...e), d),
      new FormData()
    );
  }

  function _submitForm(values, actions) {
    const postData = async (val) => {
      const formData = new FormData();

      for (const name in val) {
        if (Array.isArray(val[name])) {
          val[name].forEach((item) => {
            formData.append(val[name], JSON.stringify(item));
          });
        } else {
          formData.append(name, val[name]);
        }
      }

      const postForm = await fetch(
        'https://resume.redberryinternship.ge/api/cvs',
        {
          method: 'POST',
          body: formData,
        }
      );
      const resp = await response.json();
    };
    console.log;
    postData(values);
    actions.setSubmitting(false);

    if (!isLastStep) {
      setActiveStep(activeStep + 1);
    }
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      console.log('submiting', values);
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
            <Button type="submit" variant="contained" color="secondary">
              {isLastStep ? 'submit' : 'შემდეგი'}
            </Button>
          </div>
        </div>

        <Persist name="form" />
      </Form>
    </Formik>
  );
}
