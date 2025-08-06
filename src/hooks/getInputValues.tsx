import React, { useState } from "react";
import type { IStudent } from "../types";

export const useGetInputValue = (initialState: IStudent) => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormData((prv) => ({ ...prv, [name]: value }));
  };
  return { formData, handleChange, setFormData };
};
