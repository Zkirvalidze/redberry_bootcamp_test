import React, { useState, useEffect } from 'react';
import InputField from '../../../shared/forms/InputField';
import { Stack, Box, Grid } from '@mui/material';
import { FieldArray } from 'formik';

import DatePickerField from '../../../shared/forms/Datepicker';
import { useFormikContext } from 'formik';
import FormHeader from '../../../components/FormHeader';
import SelectField from '../../../shared/forms/SelectField';
import { Button } from '@material-ui/core';

const EducationStep = ({degrees}) => {
  const props = useFormikContext();
 
  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <FormHeader headerText={'განათლება'} pageNumber={3} />

        <FieldArray name="educations">
          {({ insert, remove, push }) => (
            <div>
              {props.values.educations.map((edu, index) => (
                <div className="row" key={index}>
                  <Box my="40px">
                    <InputField
                      label="უნივერსიტეტი"
                      name={`educations.${index}.institute`}
                      placeholder="უნივერსიტეტი"
                    />
                  </Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                    gap={4}
                  >
                    <SelectField
                      name={`educations.${index}.degree_id`}
                      label={'ხარისხი'}
                      data={degrees}
                      className="w-[50%]"
                    />

                    <Box>
                      <DatePickerField
                        name={`educations.${index}.due_date`}
                        label="დამთავრების თარიღი"
                        inputVariant="outlined"
                        placeholder="MM/dd/yyyy"
                        minDate={new Date()}
                        maxDate={new Date('2050/12/31')}
                        fullWidth
                      />
                    </Box>
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

                  <Box className="border-b-2 border-black  " my={4} />
                </div>
              ))}
              <Box mb={4}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    push({
                      institute: '',
                      degree_id: '',
                      due_date: null,
                      description: '',
                    })
                  }
                >
                  Add educations
                </Button>
              </Box>
            </div>
          )}
        </FieldArray>
      </Grid>
    </Grid>
  );
};

export default EducationStep;
