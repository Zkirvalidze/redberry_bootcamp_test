import * as Yup from 'yup';

const EDUCATION_SCHEMA = Yup.object().shape(
  {
    university: Yup.string().when(
      ['degree', 'startDate', 'endDate', 'description'],
      {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.string().required('სავალდებულო').min(2, 'მინიმუმ 2 სიმბოლო'),
      }
    ),
    degree: Yup.string().when(
      ['university', 'startDate', 'endDate', 'description'],
      {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.string()
          .required('სავალდებულო')

          .min(2),
      }
    ),
    startDate: Yup.date()
      .nullable()
      .when(['university', 'degree', 'endDate', 'description'], {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.date().required('სავალდებულო').nullable(),
      }),

    endDate: Yup.date()
      .nullable()
      .when(['university', 'degree', 'startDate', 'description'], {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.date().required('სავალდებულო').nullable(),
      }),

    description: Yup.string().when(
      ['university', 'degree', 'startDate', 'endDate'],
      {
        is: (a, b, c, d) => a || b || c || d,
        then: Yup.string().required('სავალდებულო'),
      }
    ),
  },
  [
    ['university', 'degree'],
    ['university', 'startDate'],
    ['university', 'endDate'],
    ['university', 'description'],
    ['degree', 'startDate'],
    ['degree', 'endDate'],
    ['degree', 'description'],
    ['startDate', 'endDate'],
    ['startDate', 'description'],
    ['endDate', 'description'],
  ]
);

const EDUCATIONS_SCHEMA = Yup.object().shape({
  educations: Yup.array()
    .of(EDUCATION_SCHEMA)
    .min(1, 'სულ მცირე ერთი განათლება')
    .required('სავალდებულო'),
});

export { EDUCATIONS_SCHEMA };
