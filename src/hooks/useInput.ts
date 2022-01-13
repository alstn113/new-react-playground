import { useState } from "react";

const useInput = (initialState: string, validator?: (text: string) => boolean) => {
  const [value, setValue] = useState(initialState);

  const onChange = ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    const { value } = target;
    if (validator === undefined) {
      setValue(value);
    } else {
      const willdata = validator(value);
      if (willdata) {
        setValue(value);
      }
    }
  };

  return { value, onChange, setValue };
};

export default useInput;
