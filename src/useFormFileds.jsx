import React, { useState } from "react";
import { useDebugValue } from "react";

export default function useFormFileds(init) {
  const [fileds, setFileds] = useState(init);

  function handleChange(e) {
    const { target } = e;
    setFileds({
      ...fileds,
      [target.name]: target.value,
    });
  }

  useDebugValue(fileds, (fileds) => `${Object.keys(fileds).length} fileds`);

  return { fileds, handleChange };
}
