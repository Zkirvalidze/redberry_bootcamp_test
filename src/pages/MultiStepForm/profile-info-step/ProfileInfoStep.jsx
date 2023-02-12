import { Stack, Box, Grid } from '@mui/material';
import React from 'react';
import InputField from '../../../shared/forms/InputField';
import FormHeader from '../../../components/FormHeader';
import BaseFileUploadSingle from '../../../shared/forms/FIleUploadSingle';

const ProfileInfoStep = ({ imgUploadCB }) => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <FormHeader headerText={'ჩვენს შესახებ'} pageNumber={1} />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          my="40px"
        >
          <Box>
            <InputField label="სახელი" name="name" placeholder="ანზორ" />
          </Box>
          <Box>
            <InputField label="გვარი" name="surname" placeholder="მუმლაძე" />
          </Box>
        </Stack>
        <Box mb={4}>
          <BaseFileUploadSingle
            imgUploadCB={imgUploadCB}
            name="image"
            control="upload-single"
            persistValue={true}
          />
        </Box>
        <Box mb={4}>
          <InputField
            label="ჩემს შესახებ/არასავალდებულო"
            name="aboutUs"
            placeholder="ზოგი ინფო ჩვენს შესახებ"
            multiline
            rows={4}
            variant="outlined"
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
            name="phone_number"
            placeholder="+995 599 77 90 56"
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export default ProfileInfoStep;
