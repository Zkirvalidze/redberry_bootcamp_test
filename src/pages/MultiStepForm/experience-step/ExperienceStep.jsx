import React from 'react';
import { Stack, Box, Grid } from '@mui/material';
import { FieldArray, useFormikContext } from 'formik';

import FormHeader from '../../../components/FormHeader';
import InputField from '../../../shared/forms/InputField';
import DatePickerField from '../../../shared/forms/Datepicker';
import { Button } from '@material-ui/core';

const ExperienceStep = () => {
  const props = useFormikContext();
  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <FormHeader headerText={'გამოცდილება'} pageNumber={2} />
        <FieldArray name="experiences">
          {({ remove, push }) => (
            <>
              {props.values.experiences.map((edu, index) => (
                //

                <Box className="row" key={index}>
                  <Box my="40px">
                    <InputField
                      label="პოზიცია"
                      name={`experiences.${index}.position`}
                      placeholder="დეველოპერი, დიზაინერი, ა.შ."
                    />
                  </Box>

                  <Box my="40px">
                    <InputField
                      label="დამსაქამებელი"
                      name={`experiences.${index}.employer`}
                      placeholder="დამსაქამებელი"
                    />
                  </Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                    gap={10}
                    my="40px"
                  >
                    <DatePickerField
                      label="დაწყების თარიღი"
                      name={`experiences.${index}.start_date`}
                      inputVariant="outlined"
                      placeholder="MM/dd/yyyy"
                      minDate={new Date()}
                      maxDate={new Date('2050/12/31')}
                      fullWidth
                    />

                    <DatePickerField
                      label="დამთავრების თარიღი"
                      name={`experiences.${index}.due_date`}
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
                      name={`experiences.${index}.description`}
                      placeholder="ზოგი ინფო ჩვენს შესახებ"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Box>
                  <Box className="border-b-2 border-black  " my={4} />
                </Box>
              ))}
              <Box mb={4}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() =>
                    push({
                      position: '',
                      employer: '',
                      srart_date: null,
                      due_date: null,
                      description: '',
                    })
                  }
                >
                  მეტი გამოცდილების დამატება
                </Button>
              </Box>
            </>
          )}
        </FieldArray>
      </Grid>
    </Grid>
  );
};

export default ExperienceStep;
