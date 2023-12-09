import type { Patient } from '@/models/patient.model';
import { LoadingCrudService, SetLoadingTypesFn } from './loading-crud.service';

export class PatientService extends LoadingCrudService<Patient> {
  constructor({ setLoading }: { setLoading?: SetLoadingTypesFn } = {}) {
    super({ resource: 'patients', setLoading });
  }
}
