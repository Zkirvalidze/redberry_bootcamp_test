import * as Yup from 'yup';

const EXPERIENCE_SCHEMA = Yup.object().shape(
  {
    position: Yup.string().when(
      ['employer', 'startDate', 'endDate', 'description'],
      {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.string().required('სავალდებულო').min(2, 'მინიმუმ 2 სიმბოლო'),
      }
    ),
    employer: Yup.string().when(
      ['position', 'startDate', 'endDate', 'description'],
      {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.string()
          .required('სავალდებულო')

          .min(2),
      }
    ),
    startDate: Yup.date()
      .nullable()
      .when(['position', 'employer', 'endDate', 'description'], {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.date().required('სავალდებულო').nullable(),
      }),

    endDate: Yup.date()
      .nullable()
      .when(['position', 'employer', 'startDate', 'description'], {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.date().required('სავალდებულო').nullable(),
      }),
    description: Yup.string().when(
      ['position', 'employer', 'startDate', 'endDate'],
      {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.string().required('სავალდებულო'),
      }
    ),
  },
  [
    ['position', 'employer'],
    ['position', 'startDate'],
    ['position', 'endDate'],
    ['position', 'description'],
    ['employer', 'startDate'],
    ['employer', 'endDate'],
    ['employer', 'description'],
    ['startDate', 'endDate'],
    ['startDate', 'description'],
    ['endDate', 'description'],
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
