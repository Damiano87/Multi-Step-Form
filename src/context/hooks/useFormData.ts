import { useContext } from "react";
import { FormContext } from "../FormContext";

export const useFormData = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormData musi być użyty wewnątrz FormProvider");
  return context;
};
