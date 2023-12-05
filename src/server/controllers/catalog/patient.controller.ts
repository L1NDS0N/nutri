import { Patient } from '@/models/patient.model';
import { NextApiRouter } from '@/server/core/NextApiRouter';
import { PatientRepository } from '@/server/repositories/patient-repository-impl';
import TGenericController from '../generic-controller/generic-controller';

export class PatientController extends TGenericController<Patient> {
  constructor(router: NextApiRouter) {
    super(router, new PatientRepository(), {
      subjectSingular: 'Categoria',
      genre: 'fem',
      subjectPlural: 'Categorias',
    });
  }
}
