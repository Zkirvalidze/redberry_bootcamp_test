import * as Yup from 'yup';

const geoAlphabetRegex = /^([\u10D0-\u10F0]+)$/;
const phoneRegex = /^(\+?995)?(79\d{7}|5\d{8})$/;

const PROFILE_INFO_SCHEMA = Yup.object({
  name: Yup.string()
    .matches(geoAlphabetRegex, 'მხოლოდ ქართული სიმბოლოები')
    .required('')
    .min(2, 'მინიმუმ 2 ასო,ქართული ასოები'),
  surname: Yup.string()
    .required('')
    .min(2)
    .matches(geoAlphabetRegex, 'მხოლოდ ქართული სიმბოლოები'),
  image: Yup.mixed().required('File is required'),
  phone: Yup.string()
    .matches(phoneRegex, 'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს')
    .required(''),
  email: Yup.string()
    .required()
    .matches('@redberry.ge', 'უნდა მთავრდებოდეს @redberry.ge-თი'),
});

export { PROFILE_INFO_SCHEMA };
