import React from 'react';
import { useFormikContext } from 'formik';
import { Stack, Box, Typography, Grid } from '@mui/material';
const Resume = ({ props }) => {
  const image = localStorage.getItem('image');
  const { name, surname, email, phone, aboutUs } = props.values.personalInfo;
  const educations = props.values.educations;
  console.log(educations);
  return (
    <>
      <Stack direction="row" gap={10} mt={6}>
        <Box>
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
        </Box>

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

      <Typography variant="h5" color="red" fontWeight="600" mt={4}>
        გამოცდილება
      </Typography>
      {educations.map((edu) => {
        return (
          <>
            <p className="mt-6 text-xl min-w-[400px] ">{edu.position}</p>

            <p className="mt-6 text-xl min-w-[400px] ">
              {JSON.stringify(edu.startDate).substring(1, 11)} --
              {JSON.stringify(edu.endDate).substring(1, 11)}
            </p>

            <Typography
              className="mt-6 text-xl min-w-[400px]  "
              sx={{ wordBreak: 'break-word' }}
            >
              {edu.description}
            </Typography>
          </>
        );
      })}
      </>
  );
};

export default Resume;
