import type { NutritionalAssessment } from '@/models/nutritional-assessment.model';
import { LoadingCrudService, SetLoadingTypesFn } from './loading-crud.service';


export class NutritionalAssessmentService extends LoadingCrudService<NutritionalAssessment> {
  constructor({ setLoading }: { setLoading?: SetLoadingTypesFn } = {}) {
    super({ resource: 'nutritional-assessments', setLoading });
  }
}
