'use client';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

export default function Patient() {
  return (
    <form className="max-w-xl mx-auto mt-8 p-6 h-screen bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Paciente</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName">Nome Completo</label>
          <InputText
            id="fullName"
            name="fullName"
            className="w-full"
            required
          />
        </div>
        <div>
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
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="birthDate">Data de Nascimento</label>
          <Calendar id="birthDate" name="birthDate" showIcon required />
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" className="w-full ">
          Enviar
        </Button>
      </div>
    </form>
  );
}
