import React from 'react';
import { useFormikContext } from 'formik';
import { Stack, Box, Typography, Grid } from '@mui/material';
const Resume = ({ props }) => {
  const {
    name,
    surname,
    phone,
    aboutUs,
    email,
    position,
    employer,
    startDate,
    endDate,
  } = props.values;

  const image = localStorage.getItem('image');
  return (
    <>
      <Stack direction="row" gap={10} mt={6}>
        <Grid container>
          <Grid item xs={7}>
            <Typography variant="h3" color="red" fontWeight="600">
              {name} {surname}
            </Typography>

            {email && <p className="mt-6 text-xl">@ {email}</p>}
            {phone && <p className="mt-6 text-xl">& {phone}</p>}
            {aboutUs && (
              <Typography variant="h5" color="red" fontWeight="600" mt={4}>
                ჩემს შესახებ
              </Typography>
            )}
            <p className="mt-6 text-xl min-w-[400px] ">{aboutUs}</p>
          </Grid>
        </Grid>
        <Box>
          {image && (
            <img
              src={JSON.parse(image).blob}
              alt="img"
              className="w-[246px] h-[246px] rounded-full  object-fit"
            />
          )}
        </Box>
      </Stack>
      {position && (
        <Typography variant="h5" color="red" fontWeight="600" mt={4}>
          გამოცდილება
        </Typography>
      )}
      <p className="mt-6 text-xl min-w-[400px] ">{position}</p>
      {startDate && endDate && (
        <p className="mt-6 text-xl min-w-[400px] ">
          {startDate}
          {endDate}
        </p>
      )}
    </>
  );
};

export default Resume;
