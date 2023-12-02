"use client";
import { EPatientGender, Patient } from "@/models/patient.model";
import { PatientService } from "@/services/api/patient.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import XRequiredLabel from "./../../components/XRequiredLabel";

export default function PatientPage() {
  const patientService = new PatientService();
  async function handleSavePatient(data: Patient) {
    patientService.updateOne({ data: { name: "ok" } });
  }

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Patient>({
    resolver: zodResolver(Patient),
  });

  const genderField = register("gender");

  return (
    <form
      onSubmit={handleSubmit(handleSavePatient)}
      className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
    >
      {errors.name?.message}
      <h2 className="text-2xl font-bold">Paciente</h2>
      <div className="flex flex-col">
        <XRequiredLabel description="Nome Completo" />
        <InputText className="w-full" {...register("name")} />
        {errors.name?.message && (
          <span className="text-red-500">{errors.name?.message}</span>
        )}
      </div>
      <div className="md:flex gap-4">
        <div className="flex flex-col flex-1">
          <XRequiredLabel description="Gênero" />
          <Dropdown
            className="w-full"
            placeholder="Selecione"
            options={[
              { label: "Masculino", value: EPatientGender.Male },
              { label: "Feminino", value: EPatientGender.Female },
            ]}
            ref={genderField.ref}
            value={watch().gender}
            onChange={(e) => setValue("gender", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <XRequiredLabel description="Data de Nascimento" />
          <Calendar showIcon {...register("birthday")} />
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
