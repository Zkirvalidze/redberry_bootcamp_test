import React from 'react';
import { useNavigate } from 'react-router-dom';
import { vector } from '../assets/index';
import { Box } from '@mui/material';

const FormHeader = ({ headerText, pageNumber }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <button
          className="p-4 absolute top-10 left-20"
          onClick={() =>
            localStorage.setItem(
              'activeStep',
              JSON.stringify(0),
              localStorage.removeItem('form'),
              navigate('/')
            )
          }
        >
          <img src={vector} alt="vector" />
        </button>
      </Box>

      <Box sx={{ paddingTop: '50px' }}>
        <Box display="flex" justifyContent="space-between">
          <h1 className="font-semibold text-lg">{headerText}</h1>
          <span>{pageNumber}/3</span>
        </Box>
        <Box className="border-b-2 border-black  " />
      </Box>
    </>
  );
};

export default FormHeader;
