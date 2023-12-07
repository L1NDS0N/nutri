import { PatientController } from '@/server/controllers/patient.controller';
import { TResourcesRunner } from '@/server/core/resources-runner';

export default new TResourcesRunner(
  PatientController,
  'show',
  'update',
  'delete',
).handler();
