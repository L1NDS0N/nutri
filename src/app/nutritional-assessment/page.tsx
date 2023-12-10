"use client";
import { XDropdown } from "@/components/XDrodpown";
import { XForm } from "@/components/XForm";
import { XRequiredLabel } from "@/components/XRequiredLabel";
import { useToast } from "@/contexts/ToastContext";
import { NutritionalAssessment } from "@/models/nutritional-assessment.model";
import { Patient } from "@/models/patient.model";
import { initialLoadingTypes } from "@/services/api/loading-crud.service";
import { NutritionalAssessmentService } from "@/services/api/nutritional-assessment.service";
import { PatientService } from "@/services/api/patient.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Knob } from "primereact/knob";
import { Tooltip } from "primereact/tooltip";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAssessment } from "react-icons/md";

export default function NutritionalAssessmentPage() {
  const [patientRequest, setPatientRequest] = useState(initialLoadingTypes);
  const patientService = new PatientService({ setLoading: setPatientRequest });
  const [patients, setPatients] = useState<Patient[]>([]);
  const toast = useToast();
  useEffect(() => {
    patientService.index().then(({ data }) => {
      setPatients(data);
    });
  }, []);

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<NutritionalAssessment>({
    resolver: zodResolver(NutritionalAssessment),
  });
  const { patient_id, weight, height } = watch();
  const imc = NutritionalAssessment.imcFrom({ height, weight });
  const {imc_caption, imc_color} = NutritionalAssessment.imcCaptionFrom(imc);
  console.log({ height, weight, imc });

  const [nutriAssmtRequest, setNutriAssmtRequest] =
    useState(initialLoadingTypes);
  const nutriAssmtService = new NutritionalAssessmentService({
    setLoading: setNutriAssmtRequest,
  });
  async function handleSaveNutritionalAssessment(data: NutritionalAssessment) {
    nutriAssmtService.storeOne({ data }).then(() => {
      toast.showToast({
        severity: "success",
        summary: "Parabuaims",
        detail: JSON.stringify(data),
        life: 3000,
      });
    });
  }

  return (
    <>
      <Tooltip target=".imc-knob" content={`${imc} - ${imc_caption}`} />
      
      <XForm
        legend="Avaliação Nutricional"
        icon={<MdOutlineAssessment />}
        onSubmit={handleSubmit(handleSaveNutritionalAssessment)}
      >
        <div className="flex flex-1">
          <div className="flex flex-col items-center p-4 break-words">
            <span>IMC</span>
            <Knob
              value={imc}
              min={15}
              max={50}
              readOnly
              className="imc-knob"
              valueColor={imc_color}
              strokeWidth={Math.round(4 * (imc / 12))}
            />
            <span>{imc_caption}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col ">
            <XRequiredLabel description="Selecione um Paciente" />
            <XDropdown
              name="patient_id"
              optionLabel="name"
              optionValue="id"
              options={patients}
              placeholder="Escolha um paciente"
              onChange={(e) => setValue("patient_id", e.target.value)}
              value={patient_id}
              loading={patientRequest.isLoading}
            />
            {errors.patient_id?.message && (
              <span className="text-red-500">{errors.patient_id?.message}</span>
            )}
          </div>
          <div className="md:flex gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="weight">Peso (kg)</label>
              <InputNumber
                showButtons
                maxFractionDigits={2}
                value={weight}
                onValueChange={(e) =>
                  setValue("weight", e.target?.value as any)
                }
              />
              {errors.weight?.message && (
                <span className="text-red-500">{errors.weight?.message}</span>
              )}
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="height">Altura (m)</label>
              <InputNumber
                showButtons
                maxFractionDigits={2}
                step={0.1}
                value={height}
                onValueChange={(e) =>
                  setValue("height", e.target?.value as any)
                }
              />
              {errors.height?.message && (
                <span className="text-red-500">{errors.height?.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button
            loading={nutriAssmtRequest.isStoring}
            type="submit"
            className="w-full justify-center"
          >
            Enviar
          </Button>
        </div>
      </XForm>
    </>
  );
}
