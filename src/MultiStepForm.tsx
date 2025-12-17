import { useState } from "react";
import ProgressIndicator from "./ProgressIndicator/ProgressIndicator";
import PersonalInfoStep from "./Step1-PersonalInfo/Step1-PersonalInfo";
import AddressStep from "./Step2-Address/Step2-Address";
import PreferencesStep from "./Step3-Preferences/Step3-Preferences";
import { useFormData } from "./context/hooks/useFormData";
import { useGetCurrentPageFromLocalStorage } from "./context/hooks/useLocalStorage";
import SuccessPage from "./SuccessPage/SuccessPage";

export default function MultiStepForm() {
  const currentPage = useGetCurrentPageFromLocalStorage();
  const [currentStep, setCurrentStep] = useState<number>(
    parseInt(currentPage) || 0
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { formData, setFormData } = useFormData();

  const steps = ["Dane osobowe", "Adres", "Preferencje"] as const;

  const saveCurrentPageToLocalStorage = () => {
    localStorage.setItem("currentPage", JSON.stringify(currentStep + 1));
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
    saveCurrentPageToLocalStorage();
  };
  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
    saveCurrentPageToLocalStorage();
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log("Dane formularza: ", formData);

    // Reset form data and localStorage after submission
    localStorage.removeItem("formData");
    localStorage.removeItem("currentPage");
    setFormData({
      personalInfo: { name: "", email: "", phone: "" },
      address: { street: "", city: "", postalCode: "" },
      preferences: { newsletter: false, notifications: true },
    });

    console.log("Formularz wysłany!");
  };

  console.log("Current step", currentStep);

  if (isSubmitted) {
    return (
      <SuccessPage
        setIsSubmitted={setIsSubmitted}
        setCurrentStep={setCurrentStep}
      />
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Formularz rejestracyjny
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Wypełnij wszystkie kroki, aby ukończyć rejestrację
        </p>

        <ProgressIndicator currentStep={currentStep} steps={steps} />

        <div className="mt-8">
          {currentStep === 0 && <PersonalInfoStep onNext={handleNext} />}
          {currentStep === 1 && (
            <AddressStep onNext={handleNext} onBack={handleBack} />
          )}
          {currentStep === 2 && (
            <PreferencesStep onBack={handleBack} onSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </div>
  );
}
