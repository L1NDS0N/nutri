import { PatientController } from '@/server/controllers/patient/patient.controller';
import { TResourcesRunner } from '@/server/core/resources-runner';

export default new TResourcesRunner(
  PatientController,
  'index',
  'store',
).handler();
