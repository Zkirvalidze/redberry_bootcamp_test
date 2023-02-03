import React from 'react';
import { initPage_bg, logo1 } from '../assets';
const Home = () => {
  const HOME_BUTTON_TEXT=' რეზიუმეს დამატება{' '}'
  return (
    <div className={`bg-[url('${initPage_bg}')] h-screen px-[70px] `}>
      <div>
        <img src={logo1} alt="redberry logo" className="py-[38px] header " />
        <div className="border-b-4 border-black" />
      </div>
      <div className=" flex items-center justify-center h-full  body">
        <button
          className=" bg-black text-white border-red-400 border-4 py-[18px]
         px-[60px]  "
          onClick={() => {}}
        >
         {HOME_BUTTON_TEXT}
        </button>
      </div>
    </div>
  );
};

export default Home;
