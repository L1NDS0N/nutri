import { z } from "zod";
import { Z } from "zod-class";
import { Patient } from "./patient.model";

export class NutritionalAssessment extends Z.class({
  id: z.number().optional(),
  weight: z.number().optional(),
  height: z.number().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  patient_id: z.number().optional(),
  patient: Patient.optional(),
}) {
  get imc() {
    if (this.weight && this.height) return this.weight / this.height ** 2;
  }
}
