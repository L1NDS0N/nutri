import { NutritionalAssessment } from '@/models/nutritional-assessment.model';
import Prisma from '@/server/lib/prisma/client';
import { TGenericRepository } from './prisma/generic-repository-impl';

export class NutritionalAssessmentRepository extends TGenericRepository<NutritionalAssessment> {
  constructor() {
    super(Prisma.new().nutritionalAssessment);
  }
}
