import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Box} from '@mui/material'
import { logo1, logo2 } from '../assets';
const Home = () => {
  const navigate = useNavigate();
  const HOME_BUTTON_TEXT = ' რეზიუმეს დამატება';
  return (
    <Box
      px="70px"
      sx={{ width: '1920px', height: '1080px' }}
      className={`bg-[url('src/assets/initPage_bg.jpeg')]   `}
    >
      <Box className="absolute w-full pr-[150px]">
        <img src={logo1} alt="redberry logo" className=" py-[38px] header " />
        <Box className="border-b-4 border-black " />
      </Box>
      <Box className=" flex relative items-center justify-center h-full  body">
        <button
          className=" bg-black text-white border-red-400 border-4 py-[18px]
         px-[60px] w-[473px] "
          onClick={() => {
            navigate('./form');
          }}
        >
          {HOME_BUTTON_TEXT}
        </button>
        <img
          src={logo2}
          alt="logo"
          className="absolute top-[473px] left-[1014px]"
        />
      </Box>
    </Box>
  );
};

export default Home;
