import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFormData } from "../context/hooks/useFormData";
import { useState } from "react";

const AddressStep = ({ onNext, onBack }) => {
  const { formData, updateFormData } = useFormData();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.address.street.trim())
      newErrors.street = "Ulica jest wymagana";
    if (!formData.address.city.trim()) newErrors.city = "Miasto jest wymagane";
    if (!/^\d{2}-\d{3}$/.test(formData.address.postalCode)) {
      newErrors.postalCode = "Format: 00-000";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) onNext();
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ulica i numer *
        </label>
        <input
          type="text"
          value={formData.address.street}
          onChange={(e) =>
            updateFormData("address", { street: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="ul. Przykładowa 123"
        />
        {errors.street && (
          <p className="text-red-500 text-sm mt-1">{errors.street}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Miasto *
        </label>
        <input
          type="text"
          value={formData.address.city}
          onChange={(e) => updateFormData("address", { city: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Warszawa"
        />
        {errors.city && (
          <p className="text-red-500 text-sm mt-1">{errors.city}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Kod pocztowy *
        </label>
        <input
          type="text"
          value={formData.address.postalCode}
          onChange={(e) =>
            updateFormData("address", { postalCode: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="00-000"
        />
        {errors.postalCode && (
          <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 flex items-center justify-center gap-2 transition-colors"
        >
          <ChevronLeft size={20} /> Wstecz
        </button>
        <button
          onClick={handleSubmit}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 transition-colors"
        >
          Dalej <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AddressStep;
