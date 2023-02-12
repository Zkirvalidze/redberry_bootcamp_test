import { buildFormData } from '../../utils/formdata.utils';
import { createFileFromBase64 } from '../../utils/file.utils';
import axios from 'axios';

export function postFormData(formValues) {
  const formData = createResumeDto(formValues);
  return axios.post('https://resume.redberryinternship.ge/api/cvs', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

function getFullyFilledObjects(arr) {
  return arr.filter((el) => Object.values(el).every((val) => !!val));
}

function createResumeDto(formValues) {
  let dataToSend = { ...formValues };
  const filledEducations = getFullyFilledObjects(dataToSend.educations);
  const filledExperiences = getFullyFilledObjects(dataToSend.experiences);
  dataToSend = {
    ...dataToSend,
    experiences: filledExperiences,
    educations: filledEducations,
  };
  let formData = new FormData();

  formData = buildFormData(formData, dataToSend);
  return formData;
}

// function isObjEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }

// function addImgToFormValues(formData, formValues) {
//   const isEmptyImg = isObjEmpty(formValues.image);
//   if (isEmptyImg) {
//     const img = localStorage.getItem('image');
//     if (img) {
//       const { blob, fileName } = JSON.parse(img);
//       const file = createFileFromBase64(blob, fileName);
//       formData.append('image', file);
//     }
//   }
// }
