import { Stack, Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import Resume from '../../../components/Resume';
import InputField from '../../../components/InputField';
import { useFormikContext } from 'formik';
import FormHeader from '../../../components/FormHeader';
import BaseFileUploadSingle from '../../../components/FIleUploadSingle';

const ProfileInfoStep = () => {
  const props = useFormikContext();
  const [imgSrc, setImgSrc] = useState(null);
  function onImgUpload(blob) {
    setImgSrc(blob);
  }

  return (
    <Grid container spacing={10}>
      <Grid item xs={7}>
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
            onImgUpload={onImgUpload}
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
      <Grid item xs={5}>
        <Resume props={props} imgSrc={imgSrc} />
      </Grid>
    </Grid>
  );
};
export default ProfileInfoStep;
