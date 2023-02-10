import * as Yup from 'yup';

const EDUCATION_SCHEMA = Yup.object().shape(
  {
    institute: Yup.string().when(['degree_id', , 'due_date', 'description'], {
      is: (a, b, c) => a || b || c,
      then: Yup.string().required('სავალდებულო').min(2, 'მინიმუმ 2 სიმბოლო'),
    }),
    degree_id: Yup.string().when(['institute', 'due_date', 'description'], {
      is: (a, b, c) => a || b || c,
      then: Yup.string().required('სავალდებულო'),
    }),

    due_date: Yup.date()
      .nullable()
      .when(['institute', 'degree_id', 'description'], {
        is: (a, b, c) => a || b || c,
        then: Yup.date().required('სავალდებულო').nullable(),
      }),

    description: Yup.string().when(['institute', 'degree_id', 'due_date'], {
      is: (a, b, c) => a || b || c,
      then: Yup.string().required('სავალდებულო'),
    }),
  },
  [
    ['institute', 'degree_id'],
    ['institute', 'due_date'],
    ['institute', 'description'],
    ['degree_id', 'due_date'],
    ['degree_id', 'description'],
    ['due_date', 'description'],
  ]
);

const EDUCATIONS_SCHEMA = Yup.object().shape({
  educations: Yup.array()
    .of(EDUCATION_SCHEMA)
    .required('სავალდებულო')
    .test(function (educations) {
      const isAtLeastOneEduFilled = educations.some((edu) =>
        Object.values(edu).every((val) => !!val)
      );
      console.log(isAtLeastOneEduFilled);
      if (!isAtLeastOneEduFilled) {
        return this.createError({ message: 'დაამატეთ სულ მცირე 1 განათლება!' });
      }
      return true;
    }),
});

export { EDUCATIONS_SCHEMA };
