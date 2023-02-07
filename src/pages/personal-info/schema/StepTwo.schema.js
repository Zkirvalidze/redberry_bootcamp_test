import * as Yup from 'yup';

const STEP_TWO_SCHEMA = Yup.object().shape({
  educations: Yup.array().of(
    Yup.object().shape({
      position: Yup.string().required('').min(2, 'მინიმუმ 2 სიმბოლო'),
      employer: Yup.string().required('').min(2),
      startDate: Yup.date().required('required').nullable(),
      endDate: Yup.date().required('required').nullable(),
      description: Yup.string().required('სავალდებულოა'),
    })
  ),
});

export { STEP_TWO_SCHEMA };
