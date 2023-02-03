import React from 'react';
import { useNavigate } from 'react-router-dom';
import { initPage_bg, logo1, logo2 } from '../assets';
const Home = () => {
  const navigate = useNavigate();
  const HOME_BUTTON_TEXT = ' რეზიუმეს დამატება';
  return (
    <div
      className={`bg-[url('src/assets/initPage_bg.jpeg')] h-screen px-[70px]  `}
    >
      <div>
        <img src={logo1} alt="redberry logo" className="py-[38px] header " />
        <div className="border-b-4 border-black" />
      </div>
      <div className=" flex relative items-center justify-center h-full  body">
        <button
          className=" bg-black text-white border-red-400 border-4 py-[18px]
         px-[60px] w-[473px] "
          onClick={() => {
            navigate('./info');
          }}
        >
          {HOME_BUTTON_TEXT}
        </button>
        <img
          src={logo2}
          alt="logo"
          className="absolute top-[473px] left-[1014px]"
        />
      </div>
    </div>
  );
};

export default Home;
