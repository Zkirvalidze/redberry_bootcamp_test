import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const PersonalInfo = () => {
  const geoAlphabetRegex = /^([\u10D0-\u10F0]+)$/;
  const phoneRegex = /^(\+?995)?(79\d{7}|5\d{8})$/;

  const initialValues = {
    name: '',
    surname: '',
    image: '',
    number: '',
    aboutUs: '',
    email: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(geoAlphabetRegex, 'მხოლოდ ქართული სიმბოლოები')
      .required('')
      .min(2,'მინიმუმ 2 ასო,ქართული ასოები'),
    surname: Yup.string()
      .required('required')
      .min(2)
      .matches(geoAlphabetRegex, 'მხოლოდ ქართული სიმბოლოები'),
    // image: yup.required('required'),
    number: Yup.string()
      .matches(
        phoneRegex,
        'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
      )
      .required('required'),
    email: Yup.string().required().matches(),
  });
  return (
    <div className="m-24">
      <h1>პირადი ინფო</h1>
      <div className="border-b-4 border-black" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {}}
        // validateOnChange={false}
        // validateOnBlur={false}
      >
        {(props) => (
          <Form className="flex justify-center flex-col">
            <label htmlFor="name">saxeli</label>
            <Field
              type="text"
              name="name"
              placeholder="ანზორ"
              className=" border-solid border-2 rounded-md border-[#dae3f0] h-16 w-full outline-none  focus-within:border-madart-orange registration-input "
            />
            <ErrorMessage name='name'/>
            <Field type="text" name="surname" placeholder="მუმლაძე" />
            <Field type="file" name="image" />
            <Field type="phone" name="phone" />
            <Field type="text" name="email" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
