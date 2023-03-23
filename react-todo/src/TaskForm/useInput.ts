import React, { useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.currentTarget.value);
  };

  const set = (newValue: string) => {
    setValue(newValue);
  };

  return { value, onChange, set };
};

export default useInput;
