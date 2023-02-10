import * as Yup from 'yup';

const EXPERIENCE_SCHEMA = Yup.object().shape(
  {
    position: Yup.string().when(
      ['employer', 'start_date', 'due_date', 'description'],
      {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.string().required('სავალდებულო').min(2, 'მინიმუმ 2 სიმბოლო'),
      }
    ),
    employer: Yup.string().when(
      ['position', 'start_date', 'due_date', 'description'],
      {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.string()
          .required('სავალდებულო')

          .min(2),
      }
    ),
    start_date: Yup.date()
      .nullable()
      .when(['position', 'employer', 'due_date', 'description'], {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.date().required('სავალდებულო').nullable(),
      }),

    due_date: Yup.date()
      .nullable()
      .when(['position', 'employer', 'start_date', 'description'], {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.date().required('სავალდებულო').nullable(),
      }),
    description: Yup.string().when(
      ['position', 'employer', 'start_date', 'due_date'],
      {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.string().required('სავალდებულო'),
      }
    ),
  },
  [
    ['position', 'employer'],
    ['position', 'start_date'],
    ['position', 'due_date'],
    ['position', 'description'],
    ['employer', 'start_date'],
    ['employer', 'due_date'],
    ['employer', 'description'],
    ['start_date', 'due_date'],
    ['start_date', 'description'],
    ['due_date', 'description'],
  ]
);

const EXPERIANCE_SCHEMA = Yup.object().shape({
  experiences: Yup.array()
    .of(EXPERIENCE_SCHEMA)
    .required('სავალდებულო')
    .test(function (experiences) {
      const isAtLeastOneExpFilled = experiences.some((exp) =>
        Object.values(exp).every((val) => !!val)
      );
      console.log(isAtLeastOneExpFilled);
      if (!isAtLeastOneExpFilled) {
        return this.createError({ message: 'დაამატეთ სულ მცირე 1 გამოცდილება!' });
      }
      return true;
    }),
});

export { EXPERIANCE_SCHEMA };
