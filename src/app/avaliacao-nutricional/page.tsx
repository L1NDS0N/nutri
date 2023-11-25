"use client";
import { NutritionalAssessment } from "@/models/nutritional-assessment.model";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  fullName: string;
  gender: string;
  birthDate: string;
  weight: string;
  height: string;
}
export default function AvaliacaoNutricional() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    gender: "",
    birthDate: "",
    weight: "",
    height: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Realize os cálculos necessários aqui, como IMC, idade, etc.
    // Exemplo de cálculo de idade:
    const birthDate = new Date(formData.birthDate);
    const currentDate = new Date();
    const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
    console.log("Idade:", ageInYears);
    // Adicione outros cálculos conforme necessário
  };

  return (
    <form className="max-w-xl mx-auto mt-8 p-6 h-screen bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Formulário de Avaliação Nutricional
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-600"
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            onChange={handleChange}
            value={formData.fullName}
            required
          />
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-600"
          >
            Gênero
          </label>
          <select
            id="gender"
            name="gender"
            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            onChange={handleChange}
            value={formData.gender}
            required
          >
            <option value="">Selecione</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="birthDate"
            className="block text-sm font-medium text-gray-600"
          >
            Data de Nascimento
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            onChange={handleChange}
            value={formData.birthDate}
            required
          />
        </div>
        <div>
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-gray-600"
          >
            Peso (kg)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            onChange={handleChange}
            value={formData.weight}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="height"
            className="block text-sm font-medium text-gray-600"
          >
            Altura (cm)
          </label>
          <input
            type="number"
            id="height"
            name="height"
            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            onChange={handleChange}
            value={formData.height}
            required
          />
        </div>
        {/* Adicione outros campos conforme necessário */}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
