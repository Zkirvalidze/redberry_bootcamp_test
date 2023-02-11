const readFile = (event) => {
  return new Promise((resolve, _) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      resolve({ blob: reader.result, fileName: file.name });
    };
    reader.readAsDataURL(file);
  });
};

const createFileFromBase64 = (blob, fileName) => {
  return new File([blob], fileName);
};

function attachFileToInput(file, inputRef) {
  const container = new DataTransfer();
  container.items.add(file);
  if (inputRef) {
    inputRef.current.files = container.files;
  }
}

export { readFile, createFileFromBase64, attachFileToInput };
