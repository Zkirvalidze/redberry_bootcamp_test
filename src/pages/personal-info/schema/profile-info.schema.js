import * as Yup from 'yup';

const geoAlphabetRegex = /^([\u10D0-\u10F0]+)$/;
const phoneRegex = /^(\+?995)?(79\d{7}|5\d{8})$/;

const PROFILE_INFO_SCHEMA = Yup.object({
  name: Yup.string()
    .matches(geoAlphabetRegex, 'მხოლოდ ქართული სიმბოლოები')
    .required('სავალდებულოა')
    .min(2, 'მინიმუმ 2 ასო,ქართული ასოები'),
  surname: Yup.string()
    .required('სავალდებულოა')
    .min(2, 'მინიმუმ 2 ასო,ქართული ასოები')
    .matches(geoAlphabetRegex, 'მხოლოდ ქართული სიმბოლოები'),
  image: Yup.mixed().required(''),
  phone: Yup.string()
    .matches(phoneRegex, 'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს')
    .required('სავალდებულოა'),
  email: Yup.string()
    .required('სავალდებულოა')
    .matches('@redberry.ge', 'უნდა მთავრდებოდეს @redberry.ge-თი'),
  // position: Yup.string().required('').min(2, 'მინიმუმ 2 სიმბოლო'),
  // employer: Yup.string().required('').min(2),
  // startDate: Yup.date().required('required').nullable(),
  // endDate: Yup.date().required('required').nullable(),
  // description: Yup.string().required(''),
});

export { PROFILE_INFO_SCHEMA };
