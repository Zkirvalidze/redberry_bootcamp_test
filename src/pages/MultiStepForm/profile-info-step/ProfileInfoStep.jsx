import { Stack, Box, Grid, Button } from '@mui/material';
import React from 'react';
import FormikControl from '../../../components/FormikControl';
import Resume from '../../../components/Resume';
import InputField from '../../../components/InputField';
import { useFormikContext } from 'formik';
import FormHeader from '../../../components/FormHeader';
import { FormikStepper } from '../MultiStepForm';

const ProfileInfoStep = () => {
  const props = useFormikContext();

  return (
    <Grid container spacing={10} sx={{ width: '1920px', height: '1080px' }}>
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
              name="personalInfo.name"
              placeholder="ანზორ"
            />
          </Box>
          <Box>
            <InputField
              label="გვარი"
              name="personalInfo.surname"
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
            name="personalInfo.aboutUs"
            placeholder="ზოგი ინფო ჩვენს შესახებ"
          />
        </Box>
        <Box mb={4}>
          <InputField
            label="ელ.ფოსტა"
            name="personalInfo.email"
            placeholder="anzor666@redberry.ge"
          />
        </Box>
        <Box mb={4}>
          <InputField
            control="input"
            label="მობილურის ნომერი "
            name="personalInfo.phone"
            placeholder="+995 599 77 90 56"
          />
        </Box>
        <Box mt="20px" display="flex" justifyContent="flex-end">
          <Button variant="contained" type="submit">
            {FormikStepper.isLastStep ? 'submit' : 'შემდეგი'}
          </Button>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Resume props={props} />
      </Grid>
    </Grid>
  );
};
export default ProfileInfoStep;
