import React from 'react';
import FormikControl from './FormikControl';
import { fieldStyle } from '../pages/personal-info/PersonalInfo';
const StepTwo = () => {
  return (
    <>
      <FormikControl
        control="input"
        type="text"
        label="თანამდებობა"
        name="position"
        placeholder="დეველოპერი, დიზაინერი, ა.შ."
        className={fieldStyle}
      />
      <FormikControl
        control="input"
        type="text"
        label="დამსამებელი"
        name="employer"
        placeholder="დამსაქმებელი"
        className={fieldStyle}
      />
      <div className="flex gap-[68px] py-[77px]  ">
        <div className="flex flex-col w-full   ">
          <FormikControl
            control="date"
            label="დაწყების რიცხვი"
            name="startDate"
            className={fieldStyle}
          />
        </div>
        <div className="flex flex-col w-full   ">
          <FormikControl
            control="date"
            label="დამთავრების რიცხვი"
            name="endDate"
            className={fieldStyle}
          />
        </div>
      </div>
    </>
  );
};

export default StepTwo;
