import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import { logo1, logo2 } from '../assets';
import { HOME_BUTTON_TEXT } from './MultiStepForm/form-initial-values';
const Home = () => {
  const navigate = useNavigate();
  return (
    <Box className="pageContainer">
      <Box position="fixed" width="100%" px="70px" className="header">
        <Box py="38px">
          <img src={logo1} alt="redberry logo" />
        </Box>
        <Box sx={{ borderBottomWidth: '4px', borderColor: 'black' }} />
      </Box>
      <Stack
        justifyContent="center"
        alignItems="center"
        height="100%"
        className="body"
      >
        <Box>
          <button
            className="homeBtn "
            onClick={() => {
              navigate('./form');
            }}
          >
            <Typography fontSize="20px"> {HOME_BUTTON_TEXT}</Typography>
          </button>
        </Box>
        <Box>
          <img src={logo2} alt="logo" className="img1" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
