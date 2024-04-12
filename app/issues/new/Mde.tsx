"use client";

import React, { useCallback, useState } from "react";
import SimpleMdeReact from "react-simplemde-editor";

const Mde = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);
  return (
    <SimpleMdeReact
      placeholder="Description"
      value={value}
      onChange={onChange}
    />
  );
};

export default Mde;
