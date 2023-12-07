import { NutritionalAssessment } from '@/models/nutritional-assessment.model';
import { NextApiRouter } from '@/server/core/NextApiRouter';
import { NutritionalAssessmentRepository } from '../repositories/nutritional-assessment.repository';
import TGenericController from './generic-controller/generic-controller';

export class NutritionalAssessmentController extends TGenericController<NutritionalAssessment> {
  constructor(router: NextApiRouter) {
    super(router, new NutritionalAssessmentRepository(), {
      subjectSingular: 'Paciente',
      subjectPlural: 'Pacientes',
      genre: 'male',
    });
  }
}
