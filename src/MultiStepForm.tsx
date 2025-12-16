import { Check } from "lucide-react";
import { useState } from "react";
import ProgressIndicator from "./ProgressIndicator/ProgressIndicator";
import PersonalInfoStep from "./Step1-PersonalInfo/Step1-PersonalInfo";
import AddressStep from "./Step2-Address/Step2-Address";
import PreferencesStep from "./Step3-Preferences/Step3-Preferences";

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const steps = ["Dane osobowe", "Adres", "Preferencje"] as const;

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log("Formularz wysłany!");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={40} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Sukces!</h2>
          <p className="text-gray-600">Formularz został pomyślnie wysłany.</p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(0);
            }}
            className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Wypełnij ponownie
          </button>
        </div>
      </div>
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
