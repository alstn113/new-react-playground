import { useEffect, useState } from "react";

const getLocalValue = (key: string, initValue: string | boolean | Function) => {
  // SSR Next.js
  if (typeof window === "undefined") return initValue;

  // if value is already stored
  const localValue = JSON.parse(localStorage.getItem(key) as string);
  if (localValue) return localValue;

  // return result of function
  if (initValue instanceof Function) return initValue();

  return initValue;
};

const useLocalStorage = (key: string, initValue: string | boolean | Function) => {
  const [value, setValue] = useState(() => {
    return getLocalValue(key, initValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;
