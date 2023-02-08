import * as Yup from 'yup';

const EXPERIANCE_SCHEMA = Yup.object().shape({
  experiance: Yup.array().of(
    Yup.object().shape({
      position: Yup.string().required('').min(2, 'მინიმუმ 2 სიმბოლო'),
      employer: Yup.string().required('').min(2),
      startDate: Yup.date().required('required').nullable(),
      endDate: Yup.date().required('required').nullable(),
      description: Yup.string().required('სავალდებულოა'),
    })
  ),
});

export { EXPERIANCE_SCHEMA };
