import React from 'react';

import InputField from './InputField';
import { Stack, Box, Grid, Button } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { FieldArray, Field, ErrorMessage } from 'formik';
import { alpha } from '@material-ui/core/styles';
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
  console.log(props.values);
  return (
    <Grid container spacing={10}>
      <Grid item xs={7}>
        <FormHeader headerText={'გამოცდილება'} pageNumber={2} />
      
     

        <FieldArray name="education">
          {({ insert, remove, push }) => (
            <div>
              {props.values.education.length > 0 &&
                props.values.education.map((edu, index) => (
                  //

                  <div className="row" key={index}>
                    <Box my="40px">
                      <InputField
                        label="პოზიცია"
                        name={`education.${index}.position`}
                        placeholder="დეველოპერი, დიზაინერი, ა.შ."
                      />
                    </Box>

                    <Box my="40px">
                      <InputField
                        label="დამსაქამებელი"
                        name={`education.${index}.employer`}
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
                    <div className="col">
                      <button
                        type="button"
                        className="secondary"
                        onClick={() => remove(index)}
                      >
                        X
                      </button>
                    </div>
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
      <Grid item xs={4}>
        <Resume props={props} />
      </Grid>
    </Grid>
  );
};

export default StepTwo;
