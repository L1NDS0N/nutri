"use client";
import XRequiredLabel from "@/components/XRequiredLabel";
import { NutritionalAssessment } from "@/models/nutritional-assessment.model";
import { Patient } from "@/models/patient.model";
import { initialLoadingTypes } from "@/services/api/loading-crud.service";
import { PatientService } from "@/services/api/patient.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function NutritionalAssessmentPage() {
  const [patientRequest, setPatientRequest] = useState(initialLoadingTypes);
  const patientService = new PatientService({ setLoading: setPatientRequest });
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
  const patientField = register("patient_id");

  return (
    <form className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Formulário de Avaliação Nutricional
      </h2>

      <div className="flex flex-col ">
        <div className="flex flex-col ">
          <XRequiredLabel description="Selecione um Paciente" />
          <Dropdown
            name="patient_id"
            optionLabel="name"
            optionValue="id"
            options={patients}
            placeholder="Escolha um paciente"
            ref={patientField.ref}
            onChange={(e) => setValue("patient_id", e.target.value)}
            value={watch().patient_id}
          />
          {errors.patient_id?.message && (
            <span className="text-red-500">{errors.patient_id?.message}</span>
          )}
        </div>
        <div className="md:flex gap-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="weight">Peso</label>
            <InputNumber
              showButtons
              suffix="kg"
              maxFractionDigits={2}
              name="weight"
              {...(register("weight") as any)}
            />
            {errors.weight?.message && (
              <span className="text-red-500">{errors.patient_id?.message}</span>
            )}
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="height">Altura</label>
            <InputNumber
              showButtons
              suffix="m"
              maxFractionDigits={2}
              name="height"
              {...(register("height") as any)}
            />
            {errors.patient_id?.message && (
              <span className="text-red-500">{errors.height?.message}</span>
            )}
          </div>
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
