"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  fullName: string;
  gender: string;
  birthDate: string;
  weight: string;
  height: string;
}

const mockPatients = [
  { id: 1, name: "João Silva", gender: "male", birthDate: "1990-01-01", weight: "70", height: "175" },
  { id: 2, name: "Maria Oliveira", gender: "female", birthDate: "1985-05-15", weight: "60", height: "160" },
  // Adicione mais pacientes conforme necessário
];

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

  const handleSelectPatient = (patientId: number) => {
    const selectedPatient = mockPatients.find(patient => patient.id === patientId);
    if (selectedPatient) {
      setFormData({
        fullName: selectedPatient.name,
        gender: selectedPatient.gender,
        birthDate: selectedPatient.birthDate,
        weight: selectedPatient.weight,
        height: selectedPatient.height,
      });
    }
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
    <form className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Formulário de Avaliação Nutricional
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="patient"
            className="block text-sm font-medium text-gray-600"
          >
            Selecione um Paciente
          </label>
          <select
            id="patient"
            name="patient"
            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) => handleSelectPatient(Number(e.target.value))}
            defaultValue=""
          >
            <option value="" disabled>Escolha um paciente</option>
            {mockPatients.map(patient => (
              <option key={patient.id} value={patient.id}>{patient.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
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
