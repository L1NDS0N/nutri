'use client';
import { NutritionalAssessment } from '@/models/nutritional-assessment.model';
import { Patient } from '@/models/patient.model';
import { PatientService } from '@/services/api/patient.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NutritionalAssessmentPage() {
  const patientService = new PatientService();
  const [patients, setPatients] = useState<Patient[]>([]);
  useEffect(() => {
    patientService.index().then(({ data }) => {
      setPatients(data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<NutritionalAssessment>({
    resolver: zodResolver(NutritionalAssessment),
  });
  const patientField = register('patient_id');
  console.log(watch());
  return (
    <form className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Formulário de Avaliação Nutricional
      </h2>

      <div className="flex flex-col">
        <label htmlFor="patient">Selecione um Paciente</label>
        <Dropdown
          optionLabel="name"
          optionValue="id"
          options={patients}
          placeholder="Escolha um paciente"
          ref={patientField.ref}
          onChange={e => setValue('patient_id', e.target.value)}
          value={watch().patient_id}
        />
      </div>
      <div className="md:flex gap-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="weight">Peso (kg)</label>
          <InputText {...register('weight')} />
        </div>

        <div className="flex flex-col flex-1">
          <label htmlFor="height">Altura (cm)</label>
          <InputText {...register('height')} />
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
