import { useFormikContext } from 'formik';
import { useEffect, useRef } from 'react';

const BaseFileUploadSingle = (props) => {
  const { name, label, ...rest } = props;
  const { setFieldValue, values } = useFormikContext();
  const uploadImageInputRef = useRef(null);

  function handleFileUpload(e) {
    readImageFile(e)
      .then((res) => {
        localStorage.setItem(name, JSON.stringify(res));
      })
      .catch((e) => console.error(e));
  }

  function readImageFile(event) {
    return new Promise((resolve, reject) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = function () {
        resolve({ blob: reader.result, fileName: file.name });
      };
      reader.readAsDataURL(file);
    });
  }

  function createFileFromBase64() {
    const data = localStorage.getItem(name);
    if (data) {
      const { blob, fileName } = JSON.parse(data);
      const file = new File([blob], fileName);
      return file;
    }
  }

  useEffect(() => {
    const file = createFileFromBase64();
    if (file) {
      setFieldValue(name, file);
      updateInput(file);
    }
  }, []);

  function updateInput(file) {
    let container = new DataTransfer();
    container.items.add(file);
    uploadImageInputRef.current.files = container.files;
  }

  return (
    <>
      <input
        id={name}
        ref={uploadImageInputRef}
        name={name}
        type="file"
        accept="image/*"
        {...rest}
        onChange={(e) => {
          setFieldValue(name, e.target.files[0]);
          handleFileUpload(e);
        }}
      />

      <img src="" alt="" />
    </>
  );
};

export default BaseFileUploadSingle;