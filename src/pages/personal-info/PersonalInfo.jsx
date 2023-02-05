import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useLocalStorageState } from '../../hooks/useLocalStorage';
import { PROFILE_INFO_SCHEMA } from './schema/profile-info.schema';
import { STEP_TWO_SCHEMA } from './schema/StepTwo.schema';
import BaseFileUploadSingle from '../../components/FIleUploadSingle';
import Resume from '../../components/Resume';
import FormHeader from '../../components/FormHeader';

import StepOne from '../../components/StepOne';
import StepTwo from '../../components/StepTwo';
import { Button } from '@mui/material';
const LOCAL_STORAGE_KEY = 'personalInfoForm';
const INITIAL_VALUES = {
  name: '',
  surname: '',
  image: '',
  phone: '',
  aboutUs: '',
  email: '',
  position: '',
  employer: '',
  startDate: null,
  endDate: null,
};
export const fieldStyle =
  'border-solid border-2 rounded-sm border-black h-16 p-4   ';

const PersonalInfo = (props) => {
  console.log(props);
  // const [initialValues, handleUpdateForm] = useLocalStorageState({
  //   key: LOCAL_STORAGE_KEY,
  //   value: INITIAL_VALUES,
  // });

  // // const handleReset = React.useCallback(() => {
  // //   saveForm(INITIAL_VALUES);
  // // }, [saveForm]);
  // React.useEffect(() => {
  //   handleUpdateForm(props.values);
  // }, [props.values, handleUpdateForm]);

  return (
    <div className="flex  w-[1920px] mt-10">
      <div className="px-[150px] w-[1090px]  ">
        <FormHeader headerText={'ჩვენს შესახებ'} pageNumber={1} />
        <FormikStepper
          enableReinitialize
          initialValues={INITIAL_VALUES} //gasasworebeli
        >
          <StepOne validationSchema={PROFILE_INFO_SCHEMA} />
          <StepTwo validationSchema={STEP_TWO_SCHEMA} />
        </FormikStepper>
      </div>

      {/* <Resume props={props} /> */}
    </div>
  );
};
export default PersonalInfo;

export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currrentChild = childrenArray[step];

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };
  console.log(step);
  return (
    <Formik
      {...props}
      validationSchema={currrentChild.props.validationSchema}
      onSubmit={() => {
        console.log('hello');

        if (isLastStep()) {
          // await props.onSubmit(values, helpers);
        } else {
          console.log('Semdegi');
          setStep((s) => s + 1);
        }
      }}
    >
      <Form className="flex justify-center flex-col">
        {currrentChild}

        <Button variant="contained" type="submit">
          {isLastStep() ? 'submit' : 'შემდეგი'}
        </Button>
      </Form>
    </Formik>
  );
}
