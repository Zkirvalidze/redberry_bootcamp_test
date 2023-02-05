import * as Yup from 'yup';

const STEP_TWO_SCHEMA = Yup.object({
  position: Yup.string().required('').min(2, 'მინიმუმ 2 სიმბოლო'),
  employer: Yup.string().required('').min(2),
  startDate: Yup.date().required('required').nullable(),
  endDate: Yup.date().required('required').nullable(),
  description: Yup.string().required(''),
});

export { STEP_TWO_SCHEMA };
