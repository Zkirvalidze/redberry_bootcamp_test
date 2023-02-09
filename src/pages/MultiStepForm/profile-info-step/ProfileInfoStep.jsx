import { Stack, Box, Grid, Button } from '@mui/material';
import React from 'react';
import FormikControl from '../../../components/FormikControl';
import Resume from '../../../components/Resume';
import InputField from '../../../components/InputField';
import { useFormikContext } from 'formik';
import FormHeader from '../../../components/FormHeader';


const ProfileInfoStep = () => {
  const props = useFormikContext();
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
              name="profileInfo.name"
              placeholder="ანზორ"
            />
          </Box>
          <Box>
            <InputField
              label="გვარი"
              name="profileInfo.surname"
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
            name="profileInfo.aboutUs"
            placeholder="ზოგი ინფო ჩვენს შესახებ"
            multiline
            rows={4}
            variant="outlined"
          />
        </Box>
        <Box mb={4}>
          <InputField
            label="ელ.ფოსტა"
            name="profileInfo.email"
            placeholder="anzor666@redberry.ge"
          />
        </Box>
        <Box mb={4}>
          <InputField
            control="input"
            label="მობილურის ნომერი "
            name="profileInfo.phone"
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
export default ProfileInfoStep;
