import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PersonalInfo = () => {
  const geoAlphabetRegex = /^([\u10D0-\u10F0]+)$/;
  const phoneRegex = /^(\+?995)?(79\d{7}|5\d{8})$/;
  const fieldStyle =
    'border-solid border-2 rounded-md border-black h-16   ';

  const initialValues = {
    name: '',
    surname: '',
    image: '',
    phone: '',
    aboutUs: '',
    email: '',
  };
  const validationSchema = Yup.object({
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
      .matches(
        phoneRegex,
        'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
      )
      .required(''),
    email: Yup.string()
      .required()
      .matches('@redberry.ge', 'უნდა მთავრდებოდეს @redberry.ge-თი'),
  });

    const onsubmit = (event)=>{
         
        console.log(11111111111111)}
  return (
    <div className="m-24">
      <h1>პირადი ინფო</h1>
      <div className="border-b-4 border-black" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onsubmit}
      >
        {(props) => (
          <Form className="flex justify-center flex-col ">
            <div className="flex  gap-10 justify-between">
              <div className="flex flex-col w-full   ">
                <label htmlFor="name">სახელი:</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="ანზორ"
                  className={fieldStyle}
                />
                <ErrorMessage name="name" />
              </div>
              <div className="flex flex-col w-full   ">
                <label htmlFor="surname">გვარი:</label>
                <Field
                  type="text"
                  name="surname"
                  placeholder="მუმალაძე"
                  className={fieldStyle}
                />
                <ErrorMessage name="surname" />
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="name">ატვირთე:</label>
              <Field type="file" name="image" />
              <ErrorMessage name="image" />
            </div>

            <label htmlFor="name">ჩვენ შსახებ/არასავალდებულო:</label>
            <Field
              type="textarea"
              name="aboutUs"
              placeholder="ზოგი ინფო ჩვენს შესახებ"
              className={fieldStyle}
            />
            <ErrorMessage name="aboutUs" />

            <label htmlFor="name">ელ.ფოსტა</label>
            <Field
              type="text"
              name="email"
              placeholder="anzor666@redberry.ge"
              className={fieldStyle}
            />
            <ErrorMessage name="email" />

            <label htmlFor="name">მობილურის ნომერი </label>
            <Field
              type="text"
              name="phone"
              placeholder="+995 599 77 90 56"
              className={fieldStyle}
            />
            <ErrorMessage name="phone" />

            <div className="flex  justify-end">
              <button className=" p-4 bg-blue-600 w-[400px]" type='submit'>
                შემდეგი
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
