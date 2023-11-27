'use client';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

const mockPatients = [
  {
    id: 1,
    name: 'João Silva',
    gender: 'male',
    birthDate: '1990-01-01',
    weight: '70',
    height: '175',
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    gender: 'female',
    birthDate: '1985-05-15',
    weight: '60',
    height: '160',
  },
  // Adicione mais pacientes conforme necessário
];

export default function AvaliacaoNutricional() {
  return (
    <form className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Formulário de Avaliação Nutricional
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="patient">Selecione um Paciente</label>
          <Dropdown
            id="patient"
            name="patient"
            optionLabel="name"
            options={mockPatients}
            placeholder="Escolha um paciente"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="weight">Peso (kg)</label>
          <InputNumber id="weight" name="weight" required />
        </div>
        <div>
          <label htmlFor="height">Altura (cm)</label>
          <InputNumber id="height" name="height" required />
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </div>
    </form>
  );
}
