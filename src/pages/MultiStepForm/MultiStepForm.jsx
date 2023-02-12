import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { Persist } from 'formik-persist';
import { Button } from '@mui/material';

import Resume from '../../components/Resume';
import { INITIAL_VALUES } from './form-initial-values';
/* Steps */
import ProfileInfoStep from './profile-info-step/ProfileInfoStep';
import ExperienceStep from './experience-step/ExperienceStep';
import EducationStep from './education-step/EducationStep';

/* Schemas */
import { PROFILE_INFO_SCHEMA } from './profile-info-step/schema/profile-info.schema';
import { EDUCATIONS_SCHEMA } from './education-step/schema/Education.schema';
import { EXPERIANCE_SCHEMA } from './experience-step/schema/experience.schema';
import useStep from '../../hooks/useStep';
import { postFormData } from './multi-step-form.service';

export default function MultiStepForm() {
  const [degrees, setDegrees] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://resume.redberryinternship.ge/api/degrees'
      );
      const data = await response.json();
      setDegrees(data);
    };
    getData();
  }, []);

  const [imgSrc, setImgSrc] = useState(
    JSON.parse(localStorage.getItem('image'))?.blob || null
  );
  const [displayFinalResume, setDisplayFinalResume] = useState(null);

  const steps = [
    {
      id: 'ProfileInfoStep',
      cmp: <ProfileInfoStep imgUploadCB={onImgUploadCB} />,
      schema: PROFILE_INFO_SCHEMA,
    },
    {
      id: 'ExperienceStep',
      cmp: <ExperienceStep />,
      schema: EXPERIANCE_SCHEMA,
    },
    {
      id: 'EducationStep',
      cmp: <EducationStep degrees={degrees} />,
      schema: EDUCATIONS_SCHEMA,
    },
  ];
  const { index, navigation, isLastStep } = useStep({
    steps,
    initialStep: +localStorage.getItem('activeStep') || 0,
  });

  /* persist active step on refresh */
  useEffect(() => {
    localStorage.setItem('activeStep', index);
  }, [index]);

  function onImgUploadCB(blob) {
    setImgSrc(blob);
  }

  function _handleSubmit(values, actions) {
    console.log(isLastStep);
    if (isLastStep) {
      postFormData(values)
        .then((res) => {
          if (res.status === 201) {
            console.log(res.data);

            localStorage.setItem('form', JSON.stringify(INITIAL_VALUES));
            localStorage.setItem('activeStep', 0)
            localStorage.removeItem('image')
            setDisplayFinalResume(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigation.next();
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  return displayFinalResume ? (
    <Resume data={displayFinalResume} />
  ) : (
    <Formik
      validationSchema={steps[index].schema}
      initialValues={INITIAL_VALUES}
      onSubmit={_handleSubmit}
      enableReinitialize
    >
      {(props) => (
        <Form className="pl-[150px]">
          <div className="flex gap-6">
            <div>
              {steps[index].cmp}
              <div className="flex justify-between">
                <div>
                  {index !== 0 && (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={navigation.prev}
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
            </div>

            <Resume props={props} imgSrc={imgSrc} degrees={degrees} />
          </div>
          <Persist name="form" />
        </Form>
      )}
    </Formik>
  );
}
