import React from 'react';
import FormikControl from './FormikControl';
import { fieldStyle } from '../pages/personal-info/PersonalInfo';
const StepOne = () => {

  return (
    <>
      <div className="flex gap-[68px] py-[77px]  ">
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

      <FormikControl name="image" control="upload-single" />
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
    </>
  );
};

export default StepOne;
