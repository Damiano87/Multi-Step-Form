import React, { useState, createContext } from "react";

// Context do zarządzania stanem formularza
export const FormContext = createContext(null);

// Provider dla całego formularza
export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState({
    personalInfo: { name: "", email: "", phone: "" },
    address: { street: "", city: "", postalCode: "" },
    preferences: { newsletter: false, notifications: true },
  });

  const updateFormData = (step: string, data: string) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...data },
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
