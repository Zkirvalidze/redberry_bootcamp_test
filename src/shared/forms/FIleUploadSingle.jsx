import { useFormikContext } from 'formik';
import { useEffect, useRef } from 'react';
import {
  attachFileToInput,
  createFileFromBase64,
  readFile,
} from '../../utils/file.utils';

const BaseFileUploadSingle = (props) => {
  const { setFieldValue } = useFormikContext();
  const { name, label, imgUploadCB, persistValue, ...rest } = props;
  const uploadImageInputRef = useRef(null);

  function handleFileUpload(e) {
    readFile(e)
      .then((res) => {
        localStorage.setItem(name, JSON.stringify(res));
        _emitImgToParent(res.blob);
      })
      .catch((e) => console.error(e));
  }

  function transformBlobToFile() {
    const data = localStorage.getItem(name);
    if (data) {
      const { blob, fileName } = JSON.parse(data);
      _emitImgToParent(blob);
      return createFileFromBase64(blob, fileName);
    }
  }

  function _emitImgToParent(blob) {
    if (imgUploadCB) {
      imgUploadCB(blob);
    }
  }

  useEffect(() => {
    if (persistValue) {
      const file = transformBlobToFile();
      if (file) {
        setFieldValue(name, file);
        attachFileToInput(file, uploadImageInputRef);
      }
    }
  }, []);

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

          if (persistValue) {
            if (e.target.files.length > 0) {
              handleFileUpload(e);
            }
          }
        }}
      />
    </>
  );
};

export default BaseFileUploadSingle;
