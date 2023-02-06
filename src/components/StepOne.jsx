import { Stack, Box } from '@mui/material';
import React from 'react';
import FormikControl from './FormikControl';

import InputField from './InputField';
const StepOne = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          marginTop: '40px',
          marginBottom: '40px',
        }}
      >
        <Box>
          <InputField label="სახელი" name="name" placeholder="ანზორ" />
        </Box>
        <Box>
          <InputField label="გვარი" name="surname" placeholder="მუმლაძე" />
        </Box>
      </Stack>

      <FormikControl name="image" control="upload-single" />
      <InputField
        label="ჩვენს შესახებ"
        name="aboutUs"
        placeholder="ზოგი ინფო ჩვენს შესახებ"
        multiline
        minRows={2}
        maxRows={4}
      />

      <InputField
        label="ელ.ფოსტა"
        name="email"
        placeholder="anzor666@redberry.ge"
      />

      <InputField
        control="input"
        label="მობილურის ნომერი "
        name="phone"
        placeholder="+995 599 77 90 56"
      />
    </>
  );
};
export default StepOne;
