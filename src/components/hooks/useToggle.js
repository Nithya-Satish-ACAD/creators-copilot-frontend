// hooks/useToggle.js
import { useState } from "react";

export const useToggle = (initial = true) => {
  const [value, setValue] = useState(initial); // default is true now
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
};
