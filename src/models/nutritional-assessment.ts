import { Patient } from "./patient.model";

export class NutritionalAssessment {
  id!: number;
  weight!: number;
  height!: number;
  created_at!: Date;
  updated_at!: Date;

  patient_id!: number;
  patient!: Patient;

  constructor(obj?: NutritionalAssessment) {
    Object.assign(this, obj);
  }

  get imc() {
    return this.weight / this.height ** 2;
  }
}
