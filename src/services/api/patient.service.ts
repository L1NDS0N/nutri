import { Patient } from "@/models/patient.model";
import { LoadingCrudService } from "./loading-crud.service";

export class PatientService extends LoadingCrudService<Patient> {
  constructor() {
    super({ resource: "patients" });
  }
}
