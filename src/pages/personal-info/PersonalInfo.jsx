import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLocalStorageState } from '../../hooks/useLocalStorage';
import { PROFILE_INFO_SCHEMA } from './schema/profile-info.schema';

const LOCAL_STORAGE_KEY = 'personalInfoForm';
const INITIAL_VALUES = {
  name: '',
  surname: '',
  image: '',
  phone: '',
  aboutUs: '',
  email: '',
};

const PersonalInfoForm = ({ saveForm, ...props }) => {
  const fieldStyle = 'border-solid border-2 rounded-md border-black h-16   ';

  React.useEffect(() => {
    saveForm(props.values);
  }, [props.values, saveForm]);

  console.log(props);
  const handleReset = React.useCallback(() => {
    saveForm(INITIAL_VALUES);
  }, [saveForm]);

  return (
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
        <button className=" p-4 bg-blue-600 w-[400px]" type="submit">
          შემდეგი
        </button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </Form>
  );
};

const PersonalInfo = () => {
  const [initialValues, handleUpdateForm] = useLocalStorageState({
    key: LOCAL_STORAGE_KEY,
    value: INITIAL_VALUES,
  });

  const handleSubmit = React.useCallback((values) => {
    console.log('Submitting form!!!!');
  }, []);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={PROFILE_INFO_SCHEMA}
    >
      {(props) => <PersonalInfoForm saveForm={handleUpdateForm} {...props} />}
    </Formik>
  );
};

export default PersonalInfo;
