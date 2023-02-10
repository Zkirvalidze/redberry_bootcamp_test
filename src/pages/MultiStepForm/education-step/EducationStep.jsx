import React, { useEffect } from 'react';
import InputField from '../../../components/InputField';
import { Stack, Box, Grid, Button } from '@mui/material';
import { FieldArray, Field, ErrorMessage } from 'formik';

import DatePickerField from '../../../components/Datepicker';
import { useFormikContext } from 'formik';
import FormHeader from '../../../components/FormHeader';
import Resume from '../../../components/Resume';

const EducationStep = () => {
  const props = useFormikContext();
  // useEffect(() => {
  //   props.validateForm();
  // }, []);

  return (
    <Grid container spacing={10}>
      <Grid item xs={7}>
        <FormHeader headerText={'განათლება'} pageNumber={3} />

        <FieldArray name="educations">
          {({ insert, remove, push }) => (
            <div>
              {props.values.educations.map((edu, index) => (
                //

                <div className="row" key={index}>
                  <Box my="40px">
                    <InputField
                      label="განათლება"
                      name={`educations.${index}.university`}
                      placeholder="უნივერსიტეტი"
                    />
                  </Box>

                  <Box my="40px">
                    <InputField
                      label="ხარისხი"
                      name={`educations.${index}.degree`}
                      placeholder="ხარისხი"
                    />
                  </Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    gap={10}
                    my="40px"
                  >
                    <DatePickerField
                      name={`educations.${index}.startDate`}
                      // label='start date'

                      inputVariant="outlined"
                      placeholder="MM/dd/yyyy"
                      minDate={new Date()}
                      maxDate={new Date('2050/12/31')}
                      fullWidth
                    />
                    <DatePickerField
                      name={`educations.${index}.endDate`}
                      inputVariant="outlined"
                      placeholder="MM/dd/yyyy"
                      minDate={new Date()}
                      maxDate={new Date('2050/12/31')}
                      fullWidth
                    />
                  </Stack>
                  <Box mb={4}>
                    <InputField
                      label="ჩვენს შესახებ"
                      name={`educations.${index}.description`}
                      placeholder="ზოგი ინფო ჩვენს შესახებ"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Box>

                  <div className="col">
                    <button
                      type="button"
                      className="secondary"
                      onClick={() => remove(index)}
                    >
                      X
                    </button>
                  </div>
                  <Box className="border-b-2 border-black  " my={10} />
                </div>
              ))}
              <button
                type="button"
                className="secondary"
                onClick={() =>
                  push({
                    university: '',
                    degree: '',
                    startDate: null,
                    endDate: null,
                    description: '',
                  })
                }
              >
                Add educations
              </button>
            </div>
          )}
        </FieldArray>
      </Grid>
      <Grid item xs={5}>
        <Resume props={props} />
      </Grid>
    </Grid>
  );
};

export default EducationStep;
