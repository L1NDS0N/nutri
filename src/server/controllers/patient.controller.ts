import { Patient } from '@/models/patient.model';
import { NextApiRouter } from '@/server/core/NextApiRouter';
import { PatientRepository } from '@/server/repositories/patient.repository';
import TGenericController from './generic-controller/generic-controller';

export class PatientController extends TGenericController<Patient> {
  constructor(router: NextApiRouter) {
    super(router, new PatientRepository(), {
      subjectSingular: 'Paciente',
      subjectPlural: 'Pacientes',
      genre: 'male',
    });
  }
}
