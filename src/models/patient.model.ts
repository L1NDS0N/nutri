import { z } from 'zod';
import { Z } from 'zod-class';

export enum EPatientGender {
  Male,
  Female,
}

export class Patient extends Z.class({
  id: z.number(),
  name: z.string(),
  gender: z.nativeEnum(EPatientGender).nullable(),
  birthday: z.date().nullable(),
  phone: z.string().nullable(),
}) {}
