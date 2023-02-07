import * as Yup from 'yup';

const geoAlphabetRegex = /^([\u10D0-\u10F0]+)$/;
const phoneRegex = /^(\+?995)?(79\d{7}|5\d{8})$/;

const VALIDATION_SCHEMA =  Yup.object().shape({
  personalInfo: Yup.object().shape({
    name: Yup.string()
      .matches(geoAlphabetRegex, 'მხოლოდ ქართული სიმბოლოები')
      .required('სავალდებულოა')
      .min(2, 'მინიმუმ 2 ასო,ქართული ასოები'),
    surname: Yup.string()
      .required('სავალდებულოა')
      .matches(geoAlphabetRegex, 'მხოლოდ ქართული სიმბოლოები')
      .min(2, 'მინიმუმ 2 ასო,ქართული ასოები'),
    // image: Yup.mixed().required(''),
    phone: Yup.string()
      .matches(
        phoneRegex,
        'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
      )
      .required('სავალდებულოა'),
    email: Yup.string()
      .required('სავალდებულოა')
      .matches('@redberry.ge', 'უნდა მთავრდებოდეს @redberry.ge-თი'),
  }),
});

export { VALIDATION_SCHEMA };
