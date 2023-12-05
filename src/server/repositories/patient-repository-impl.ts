import { Patient } from '@/models/patient.model';
import Prisma from '@/server/lib/prisma/client';
import { TGenericRepository } from './generic-repository-impl';

export class PatientRepository extends TGenericRepository<Patient> {
  constructor() {
    super(Prisma.new().patient);
  }
}
