import { ChevronRight } from "lucide-react";
import { useFormData } from "../context/hooks/useFormData";
import { useState } from "react";

const PersonalInfoStep = ({ onNext }) => {
  const { formData, updateFormData } = useFormData();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.personalInfo.name.trim())
      newErrors.name = "Imię jest wymagane";
    if (!formData.personalInfo.email.includes("@"))
      newErrors.email = "Nieprawidłowy email";
    if (formData.personalInfo.phone.length < 9)
      newErrors.phone = "Nieprawidłowy numer";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) onNext();
  };

  return (
    <div className="space-y-4">
      {/* name and surname */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Imię i nazwisko *
        </label>
        <input
          type="text"
          value={formData.personalInfo.name}
          onChange={(e) =>
            updateFormData("personalInfo", { name: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Jan Kowalski"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          value={formData.personalInfo.email}
          onChange={(e) =>
            updateFormData("personalInfo", { email: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="jan@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* phone number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Telefon *
        </label>
        <input
          type="tel"
          value={formData.personalInfo.phone}
          onChange={(e) =>
            updateFormData("personalInfo", { phone: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="123456789"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 transition-colors"
      >
        Dalej <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default PersonalInfoStep;
