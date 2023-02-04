import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLocalStorageState } from '../../hooks/useLocalStorage';
import { PROFILE_INFO_SCHEMA } from './schema/profile-info.schema';
import FormikControl from '../../components/FormikControl';

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

  // const handleReset = React.useCallback(() => {
  //   saveForm(INITIAL_VALUES);
  // }, [saveForm]);

  return (
    <Form className="flex justify-center flex-col ">
      <h1>{JSON.stringify(props.values)}</h1>
      <div className="flex  gap-10 justify-between">
        <div className="flex flex-col w-full   ">
          <FormikControl
            control="input"
            type="text"
            label="სახელი"
            name="name"
            placeholder="ანზორ"
            className={fieldStyle}
          />
        </div>
        <div className="flex flex-col w-full   ">
          <FormikControl
            control="input"
            type="text"
            label="გვარი"
            name="surname"
            placeholder="მუმლაძე"
            className={fieldStyle}
          />
        </div>
      </div>
      <div className="mb-8">
        <label htmlFor="name">ატვირთე:</label>
        <Field
          type="file"
          name="image"
          // onChange={(e) => {
          //   const fileReader = new FileReader();
          //   let file = e.target.files[0];

          //   fileReader.onloadend = () => {
          //     props.setFieldValue('image', fileReader.result);
          //   };

          //   fileReader.readAsDataURL(file);
          // }}
        />
        <ErrorMessage name="image" />
      </div>

      <FormikControl
        control="textarea"
        type="text"
        label="თქვენ შესახებ/არასავალდებულო:"
        name="aboutUs"
        placeholder="ზოგი ინფო ჩვენს შესახებ"
        className={fieldStyle}
      />

      <FormikControl
        control="input"
        type="text"
        label="ელ.ფოსტა"
        name="email"
        placeholder="anzor666@redberry.ge"
        className={fieldStyle}
      />

      <FormikControl
        control="input"
        type="text"
        label="მობილურის ნომერი "
        name="phone"
        placeholder="+995 599 77 90 56"
        className={fieldStyle}
      />

      <div className="flex  justify-end">
        <button className=" p-4 bg-blue-600 w-[400px]" type="submit">
          შემდეგი
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
