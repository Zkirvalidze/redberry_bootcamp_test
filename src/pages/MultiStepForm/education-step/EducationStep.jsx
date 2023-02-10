import React, { useState, useEffect } from 'react';
import InputField from '../../../components/InputField';
import { Stack, Box, Grid } from '@mui/material';
import { FieldArray } from 'formik';

import DatePickerField from '../../../components/Datepicker';
import { useFormikContext } from 'formik';
import FormHeader from '../../../components/FormHeader';
import Resume from '../../../components/Resume';
import SelectField from '../../../components/SelectField';

const EducationStep = () => {
  const props = useFormikContext();
  const [degrees, setDegrees] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://resume.redberryinternship.ge/api/degrees'
      );
      const data = await response.json();
      setDegrees(data);
    };
    getData();
  }, []);

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
                      label="უნივერსიტეტი"
                      name={`educations.${index}.institute`}
                      placeholder="უნივერსიტეტი"
                    />
                  </Box>
                  <Stack direction="row" justifyContent="space-between" gap={4}>
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
                    institute: '',
                    degree_id: '',
                    due_date: null,
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
