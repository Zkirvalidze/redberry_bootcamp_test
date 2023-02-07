import React from 'react';

import InputField from './InputField';
import { Stack, Box, Grid, Button } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { FieldArray, Field, ErrorMessage } from 'formik';
import { alpha } from '@material-ui/core/styles';
import Textarea from '@mui/joy/Textarea';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useFormikContext } from 'formik';
import FormHeader from './FormHeader';
import Resume from './Resume';
const StepTwo = () => {
  const handleClick = () => {};
  const props = useFormikContext();

  return (
    <Grid container spacing={10}>
      <Grid item xs={7}>
        <FormHeader headerText={'გამოცდილება'} pageNumber={2} />

        <FieldArray name="educations">
          {({ insert, remove, push }) => (
            <div>
              {props.values.educations.length > 0 &&
                props.values.educations.map((edu, index) => (
                  //

                  <div className="row" key={index}>
                    <Box my="40px">
                      <InputField
                        label="პოზიცია"
                        name={`educations.${index}.position`}
                        placeholder="დეველოპერი, დიზაინერი, ა.შ."
                      />
                    </Box>

                    <Box my="40px">
                      <InputField
                        label="დამსაქამებელი"
                        name={`educations.${index}.employer`}
                        placeholder="დამსაქამებელი"
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
                            value={props.values.educations[index].startDate}
                            onChange={(value) =>
                              props.setFieldValue(
                                `educations.${index}.startDate`,
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
                            value={props.values.educations[index].endDate}
                            onChange={(value) =>
                              props.setFieldValue(
                                `educations.${index}.endDate`,
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
                        name={`educations.${index}.description`}
                        placeholder="ზოგი ინფო ჩვენს შესახებ"
                      /> */}
                      <label htmlFor={`educations.${index}.description`}>
                        აღწერა
                      </label>
                      <Field
                        className="w-full border-2 border-stone-300"
                        component="textarea"
                        placeholder="ზოგი ინფო ჩვენს შესახებ"
                        label="აღწერა"
                        name={`educations.${index}.description`}
                        rows="4"
                      ></Field>
                      <ErrorMessage name={`educations.${index}.description`} className='text-red-400'  />
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
                    position: '',
                    employer: '',
                    startDate: null,
                    endDate: null,
                  })
                }
              >
                Add education
              </button>
            </div>
          )}
        </FieldArray>

        <Button variant="contained" onClick={handleClick}>
          მეტი გამოცდილების დამატება{' '}
        </Button>
      </Grid>
      <Grid item xs={5}>
        <Resume props={props} />
      </Grid>
    </Grid>
  );
};

export default StepTwo;
