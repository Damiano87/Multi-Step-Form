import { createContext, useContext } from "react";
import type { FormDataProps } from "../FormContext";

type FormContextType = {
  formData: FormDataProps;
  setFormData: React.Dispatch<React.SetStateAction<FormDataProps>>;
  updateFormData: <K extends keyof FormDataProps>(
    step: K,
    data: Partial<FormDataProps[K]>
  ) => void;
};

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export const useFormData = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormData musi być użyty wewnątrz FormProvider");
  return context;
};
