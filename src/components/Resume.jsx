import React from 'react';
import { Box, Typography } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FormHeader from './FormHeader';

const Resume = ({ props, imgSrc, formSent }) => {
  const { name, surname, email, phone_number, aboutUs } = props.values;
  const experiences = props.values.experiences;
  const educations = props.values.educations;

  return (
    <>
      <Box mx={4}>
        <Box className="Profile-part">
          <Box mt="50px" position="relative">
            <Typography variant="h4" color="red" fontWeight="600">
              {name} {surname}
            </Typography>

            {email && <p className="mt-6 text-xl">@ {email}</p>}
            {phone_number && (
              <p className="mt-6 text-xl">
                <PhoneAndroidIcon /> {phone_number}
              </p>
            )}
            {aboutUs && (
              <Typography variant="h5" color="red" fontWeight="600" mt={6}>
                ჩემს შესახებ
              </Typography>
            )}

            <Typography className="mt-8  text-l max-w-[400px]">
              {aboutUs}
            </Typography>

            {phone_number && (
              <Box className="mt-6 border-b-2 border-gray-400  w-ful w " />
            )}
          </Box>
          <Box>
            {imgSrc && (
              <img
                src={imgSrc}
                alt="img"
                className=" absolute  top-10 right-10 w-[246px] h-[246px] rounded-full"
              />
            )}
          </Box>
        </Box>
        <Box className="experience-part">
          {experiences[0].position && (
            <Typography variant="h5" color="red" fontWeight="600" mt={4}>
              გამოცდილება
            </Typography>
          )}
          {experiences.map((exp, index) => {
            return (
              <div key={index}>
                {exp.position && (
                  <p className="mt-6 text-xl  ">
                    {exp.position}, {exp.employer}
                  </p>
                )}
                {exp.setImageSrc ||
                  (exp.due_Date && (
                    <p className=" text-xl text-gray-400 min-w-[400px] ">
                      {JSON.stringify(exp.start_Date).substring(1, 11)}-
                      {JSON.stringify(exp.due_Date).substring(1, 11)}
                    </p>
                  ))}
                <Typography
                  className="mt-6 text-xl min-w-[400px] "
                  sx={{ wordBreak: 'break-word' }}
                >
                  {exp.description}
                </Typography>
                {exp.description && (
                  <Box className="mt-6 border-b-2 border-gray-400  " />
                )}
              </div>
            );
          })}
        </Box>
        <Box className="education-part">
          {educations[0].institute && (
            <Typography variant="h5" color="red" fontWeight="600" mt={4}>
              განათლება
            </Typography>
          )}
          {educations.map((edu, index) => {
            return (
              <div key={index}>
                {edu.institute && (
                  <p className="mt-6 text}-xl min-w-[400px] ">
                    {edu.institute}, {edu.degree_id}
                  </p>
                )}
                {edu.setImageSrc ||
                  (edu.due_Date && (
                    <p className=" text-xl text-gray-400 min-w-[400px] ">
                      {JSON.stringify(edu.due_Date).substring(1, 11)}
                    </p>
                  ))}
                <Typography
                  className="mt-6 text-xl  "
                  // sx={{ wordBreak: 'break-word' }}
                >
                  {edu.description}
                </Typography>
              </div>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Resume;
