import React from 'react';

import InputField from './InputField';
import { Stack, Box } from '@mui/material';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useField, useFormikContext } from 'formik';

const StepTwo = () => {
  const { values, setFieldValue, ...props } = useFormikContext();

  return (
    <>
      <InputField
        label="თანამდებობა"
        name="position"
        placeholder="დეველოპერი, დიზაინერი, ა.შ."
      />
      <InputField
        label="დამსამებელი"
        name="employer"
        placeholder="დამსაქმებელი"
      />
      <Stack
        direction="row"
        spacing={25}
        // display='flex'

        my="40px"
      >
        <Box width="100%" mb={2}>
          {/* Material Ui Date Picker */}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              id="startDate"
              inputVariant="outlined"
              format="MM/dd/yyyy"
              value={values.startDate}
              onChange={(value) => setFieldValue('startDate', value)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Box>
        <Box width="100%" mb={2}>
          {/* Material Ui Date Picker */}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              id="endDate"
              inputVariant="outlined"
              format="MM/dd/yyyy"
              value={values.endDate}
              onChange={(value) => setFieldValue('endDate', value)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Box>
      </Stack>
    </>
  );
};

export default StepTwo;
