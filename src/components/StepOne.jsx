import { Stack, Box, Grid } from '@mui/material';
import React from 'react';
import FormikControl from './FormikControl';
import Resume from './Resume';
import InputField from './InputField';
import { useFormikContext } from 'formik';
import FormHeader from './FormHeader';
const StepOne = () => {
  const props = useFormikContext();
  console.log(props.values);
  return (
    <Grid container spacing={10}>
      <Grid item xs={7}>
        <FormHeader headerText={'ჩვენს შესახებ'} pageNumber={1} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          my="40px"
        >
          <Box>
            <InputField
              label="სახელი"
              name="name"
              placeholder="ანზორ"
            />
          </Box>
          <Box>
            <InputField
              label="გვარი"
              name="surname"
              placeholder="მუმლაძე"
            />
          </Box>
        </Stack>
        <Box mb={4}>
          <FormikControl name="image" control="upload-single" />
        </Box>
        <Box mb={4}>
          <InputField
            label="ჩვენს შესახებ"
            name="aboutUs"
            placeholder="ზოგი ინფო ჩვენს შესახებ"
          />
        </Box>
        <Box mb={4}>
          <InputField
            label="ელ.ფოსტა"
            name="email"
            placeholder="anzor666@redberry.ge"
          />
        </Box>
        <Box mb={4}>
          <InputField
            control="input"
            label="მობილურის ნომერი "
            name="phone"
            placeholder="+995 599 77 90 56"
          />
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Resume props={props} />
      </Grid>
    </Grid>
  );
};
export default StepOne;
