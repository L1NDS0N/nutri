'use client';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

export default function PatientPage() {
  return (
    <form className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold">Paciente</h2>
      <div className="flex flex-col">
        <label htmlFor="fullName">Nome Completo</label>
        <InputText id="fullName" name="fullName" className="w-full" required />
      </div>
      <div className="md:flex gap-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="gender">Gênero</label>
          <Dropdown
            id="gender"
            name="gender"
            className="w-full"
            placeholder="Selecione"
            options={[
              { label: 'Masculino', value: 'male' },
              { label: 'Feminino', value: 'female' },
            ]}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="birthDate">Data de Nascimento</label>
          <Calendar id="birthDate" name="birthDate" showIcon required />
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" className="w-full justify-center">
          Enviar
        </Button>
      </div>
    </form>
  );
}
