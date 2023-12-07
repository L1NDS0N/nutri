import { NutritionalAssessmentController } from '@/server/controllers/nutritional-assessment.controller';
import { TResourcesRunner } from '@/server/core/resources-runner';

export default new TResourcesRunner(
  NutritionalAssessmentController,
  'show',
  'update',
  'delete',
).handler();
