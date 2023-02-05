import React from 'react';
import { useNavigate } from 'react-router-dom';
import { vector } from '../assets/index';

const FormHeader = ({headerText,pageNumber}) => {
 const navigate =useNavigate()
  return (
    <div className="flex gap-[62px]  ">
      <button
        className="p-4 absolute top-10 left-20"
        onClick={() => navigate('/')}
      >
        <img src={vector} alt="vector" />
      </button>

      <div className="w-[798px] pt-3 items-center ">
        <div className="flex justify-between">
          <h1 className="font-semibold text-lg">{headerText}</h1>
          <span>{pageNumber}/3</span>
        </div>
        <div className="border-b-2 border-black  " />
      </div>
    </div>
  );
};

export default FormHeader;
