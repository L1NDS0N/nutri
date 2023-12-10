import { z } from "zod";
import { Z } from "zod-class";
import { Patient } from "./patient.model";

export class NutritionalAssessment extends Z.class({
  id: z.number().optional(),
  weight: z.number().min(0, "o valor mínimo é 0").optional(),
  height: z.number().min(0, "o valor mínimo é 0").optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  patient_id: z.string({ required_error: "O paciente é obrigatório" }).uuid(),
  patient: Patient.optional(),
}) {
  static imcCaptions = [
    { limit: 0, imc_caption: "", imc_color: "" },
    { limit: 17, imc_caption: "Muito abaixo do peso", imc_color: "#ef4444" },
    { limit: 18.5, imc_caption: "Abaixo do peso", imc_color: "#fde047" },
    { limit: 25, imc_caption: "Peso normal", imc_color: "#84cc16" },
    { limit: 30, imc_caption: "Acima do peso", imc_color: "#fde047" },
    { limit: 35, imc_caption: "Obesidade I", imc_color: "#ef4444" },
    { limit: 40, imc_caption: "Obesidade II (severa)", imc_color: "#dc2626" },
    { limit: 50, imc_caption: "Obesidade III (mórbida)", imc_color: "#b91c1c" },
    {
      limit: Number.POSITIVE_INFINITY,
      imc_caption: "Obesidade III (mórbida)",
      imc_color: "#991b1b",
    },
  ];

  get imc() {
    const { height, weight } = this;
    return NutritionalAssessment.imcFrom({ height, weight });
  }

  static imcFrom({ height, weight }: { height?: number; weight?: number }) {
    if (weight && height) return Number((weight / height ** 2).toFixed(2));
    return 0;
  }

  static imcCaptionFrom(imc: number) {
    for (const faixa of this.imcCaptions) {
      if (imc <= faixa.limit) {
        return faixa;
      }
    }

    return this.imcCaptions[0];
  }
}
