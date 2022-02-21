import { useState } from "react";

const useInput = (initValue: string) => {
  const [value, setValue] = useState(initValue);
  const reset = () => {
    setValue(initValue);
  };
  const attributeObj = {
    value,
    onChange: ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => setValue(target.value),
  };
  return [value, reset, attributeObj];
};

export default useInput;
