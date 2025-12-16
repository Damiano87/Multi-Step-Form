import { Check, ChevronLeft } from "lucide-react";
import { useFormData } from "../context/hooks/useFormData";

const PreferencesStep = ({ onBack, onSubmit }) => {
  const { formData, updateFormData } = useFormData();

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.preferences.newsletter}
            onChange={(e) =>
              updateFormData("preferences", { newsletter: e.target.checked })
            }
            className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-700">Chcę otrzymywać newsletter</span>
        </label>

        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.preferences.notifications}
            onChange={(e) =>
              updateFormData("preferences", { notifications: e.target.checked })
            }
            className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-700">Powiadomienia push</span>
        </label>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
        <h4 className="font-semibold text-blue-900 mb-2">Podsumowanie:</h4>
        <div className="text-sm text-blue-800 space-y-1">
          <p>
            <strong>Imię:</strong> {formData.personalInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.personalInfo.email}
          </p>
          <p>
            <strong>Adres:</strong> {formData.address.street},{" "}
            {formData.address.city}
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 flex items-center justify-center gap-2 transition-colors"
        >
          <ChevronLeft size={20} /> Wstecz
        </button>
        <button
          onClick={onSubmit}
          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2 transition-colors"
        >
          <Check size={20} /> Zatwierdź
        </button>
      </div>
    </div>
  );
};

export default PreferencesStep;
