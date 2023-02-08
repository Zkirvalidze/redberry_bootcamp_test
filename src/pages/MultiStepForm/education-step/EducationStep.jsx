import React from 'react';
import InputField from '../../../components/InputField';
import { Stack, Box, Grid, Button } from '@mui/material';
import { FieldArray, Field, ErrorMessage } from 'formik';
import { FormikStepper } from '../MultiStepForm';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useFormikContext } from 'formik';
import FormHeader from '../../../components/FormHeader';
import Resume from '../../../components/Resume';

const EducationStep = () => {
  const handleClick = () => {};
  const props = useFormikContext();

  return (
    <Grid container spacing={10}>
      <Grid item xs={7}>
        <FormHeader headerText={'განათლება'} pageNumber={3} />

        <FieldArray name="education">
          {({ insert, remove, push }) => (
            <div>
              {props.values.education.length > 0 &&
                props.values.education.map((edu, index) => (
                  //

                  <div className="row" key={index}>
                    <Box my="40px">
                      <InputField
                        label="განათლება"
                        name={`education.${index}.university`}
                        placeholder="უნივერსიტეტი"
                      />
                    </Box>

                    <Box my="40px">
                      <InputField
                        label="ხარისხი"
                        name={`education.${index}.degree`}
                        placeholder="ხარისხი"
                      />
                    </Box>
                    <Stack direction="row" my="40px">
                      <Box width="100%" mb={2}>
                        {/* Material Ui Date Picker */}
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            id="startDate"
                            inputVariant="outlined"
                            placeholder="MM/dd/yyyy"
                            value={props.values.education[index].startDate}
                            onChange={(value) =>
                              props.setFieldValue(
                                `education.${index}.startDate`,
                                value
                              )
                            }
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </Box>
                      <Box
                        width="100%"
                        mb={2}
                        display="flex"
                        justifyContent="flex-end"
                      >
                        {/* Material Ui Date Picker */}
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            id="endDate"
                            inputVariant="outlined"
                            placeholder="MM/dd/yyyy"
                            value={props.values.education[index].endDate}
                            onChange={(value) =>
                              props.setFieldValue(
                                `education.${index}.endDate`,
                                value
                              )
                            }
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </Box>
                    </Stack>
                    <Box>
                      {/* <InputField
                        component="textarea"
                        rows="4"
                        label="აღწერა"
                        name={`education.${index}.description`}
                        placeholder="ზოგი ინფო ჩვენს შესახებ"
                      /> */}
                      <label htmlFor={`education.${index}.description`}>
                        აღწერა
                      </label>
                      <Field
                        className="w-full border-2 border-stone-300"
                        component="textarea"
                        placeholder="ზოგი ინფო ჩვენს შესახებ"
                        label="აღწერა"
                        name={`education.${index}.description`}
                        rows="4"
                      ></Field>
                      <ErrorMessage
                        name={`education.${index}.description`}
                        className="text-red-400"
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
                Add education
              </button>
            </div>
          )}
        </FieldArray>

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

export default EducationStep;
