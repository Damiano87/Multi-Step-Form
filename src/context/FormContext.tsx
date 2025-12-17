import React, { useState } from "react";
import { FormContext } from "./hooks/useFormData";
import { useLocalStorage } from "./hooks/useLocalStorage";

export type FormDataProps = {
  personalInfo: { name: string; email: string; phone: string };
  address: { street: string; city: string; postalCode: string };
  preferences: { newsletter: boolean; notifications: boolean };
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const localStorageData = useLocalStorage();

  const [formData, setFormData] = useState<FormDataProps>(() => ({
    personalInfo: {
      name: localStorageData?.personalInfo?.name || "",
      email: localStorageData?.personalInfo?.email || "",
      phone: localStorageData?.personalInfo?.phone || "",
    },
    address: {
      street: localStorageData?.address?.street || "",
      city: localStorageData?.address?.city || "",
      postalCode: localStorageData?.address?.postalCode || "",
    },
    preferences: {
      newsletter: localStorageData?.preferences?.newsletter || false,
      notifications: localStorageData?.preferences?.notifications || true,
    },
  }));

  const updateFormData = <K extends keyof FormDataProps>(
    step: K,
    data: Partial<FormDataProps[K]>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...data },
    }));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
