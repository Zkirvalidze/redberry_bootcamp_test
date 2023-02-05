import { useState, useCallback } from 'react';

export const useLocalStorageState = ({ key, value }) => {
  const parsedLocalStorage = JSON.parse(localStorage.getItem(key) || '{}');
  const initialValue =
    Object.keys(parsedLocalStorage).length > 0 ? parsedLocalStorage : value;
  let [localStorageState, setLocalStorageState] = useState(initialValue);

  const handleUpdateLocalStorageState = useCallback(
    (x) => {
      setLocalStorageState(x);

      localStorage.setItem(key, JSON.stringify(x));
    },
    [key]
  );
  // const image = localStorageState.image;
  // console.log(image, "Base64format")
  // const file = new File([image], 'image file name');
  // console.log(file, "From base64 to file")
  // localStorageState = {...localStorageState, image: file}
  // console.log(localStorageState)
  return [localStorageState, handleUpdateLocalStorageState];
};
