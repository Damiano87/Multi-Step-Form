import { Check } from "lucide-react";

type ProgressIndicatorProps = {
  currentStep: number;
  steps: readonly string[];
};

const ProgressIndicator = ({ currentStep, steps }: ProgressIndicatorProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index < steps.length - 1 ? "sm:flex-1" : ""
            }`}
          >
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    index < currentStep
                      ? "bg-green-500 text-white"
                      : index === currentStep
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {index < currentStep ? <Check size={20} /> : index + 1}
                </div>
              </div>
              <span
                className={`text-xs mt-2 text-center ${
                  index === currentStep
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`hidden sm:block h-1 flex-1 mx-2 mb-6 transition-colors ${
                  index < currentStep ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
