import { z } from 'zod';
import { Z } from 'zod-class';

export enum EPatientGender {
  Male,
  Female,
}

export class Patient extends Z.class({
  id: z.string().uuid().optional(),
  name: z.string().optional(),
  gender: z.nativeEnum(EPatientGender).optional(),
  birthday: z.date().optional(),
  phone: z.string().optional(),
}) {}
