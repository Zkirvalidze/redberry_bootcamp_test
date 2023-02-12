import { useState, useEffect, Children } from 'react';
import { Formik, Form } from 'formik';
import { Persist } from 'formik-persist';
import { Button } from '@mui/material';
import axios from 'axios';

import Resume from '../../components/Resume';
import { INITIAL_VALUES } from './form-initial-values';
import { buildFormData } from '../../utils/formdata.utils';
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

  const [displayFinalResume, setDisplayFinalResume] = useState(null);

  useEffect(() => {
    localStorage.setItem('activeStep', JSON.stringify(activeStep));
  }, [activeStep]);

  const childrenArray = Children.toArray(children);
  const currrentChild = childrenArray[activeStep];
  const isLastStep = activeStep === childrenArray.length - 1;

  function getFullyFilledObjects(arr) {
    return arr.filter((el) => Object.values(el).every((val) => !!val));
  }

  function createResumeDto(formValues) {
    let dataToSend = { ...formValues };
    const filledEducations = getFullyFilledObjects(dataToSend.educations);
    const filledExperiences = getFullyFilledObjects(dataToSend.experiences);
    dataToSend = {
      ...dataToSend,
      experiences: filledExperiences,
      educations: filledEducations,
    };
    let formData = new FormData();
    formData = buildFormData(formData, dataToSend);
    return formData;
  }

  const postFormData = (formValues) => {
    const formData = createResumeDto(formValues);
    axios
      .post('https://resume.redberryinternship.ge/api/cvs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data);

          localStorage.setItem('form', INITIAL_VALUES);
          setDisplayFinalResume(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function _handleSubmit(values, actions) {
    if (isLastStep) {
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

  return displayFinalResume ? (
    <Resume data={displayFinalResume} />
  ) : (
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
