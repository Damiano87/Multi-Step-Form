import { Check } from "lucide-react";

type SuccessPageProps = {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const SuccessPage = ({ setIsSubmitted, setCurrentStep }: SuccessPageProps) => {
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
};
export default SuccessPage;
