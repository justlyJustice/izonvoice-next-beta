/* eslint-disable import/no-anonymous-default-export */
import secureLocalStorage from "react-secure-storage";

const setItem = (key, value) => {
  return secureLocalStorage.setItem(key, value);
};

const getItem = (key) => {
  return secureLocalStorage.getItem(key);
};

const removeItem = (key) => {
  return secureLocalStorage.removeItem(key);
};

const clear = () => {
  secureLocalStorage.clear();
};

export default { clear, getItem, setItem, removeItem };
