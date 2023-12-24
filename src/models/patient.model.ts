import { z } from "zod";
import { Z } from "zod-class";

export enum EPatientGender {
  Male,
  Female,
}

export class Patient extends Z.class({
  id: z.string().uuid().optional(),
  name: z.string(),
  gender: z.nativeEnum(EPatientGender).optional(),
  birthday: z.date().optional(),
  phone: z
    .string()
    .max(15)
    .refine(
      (telefone) => {
        const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
        return regex.test(telefone);
      },
      {
        message: "O formato do telefone é inválido",
      }
    )
    .optional(),
  email: z.string().email("Não é um e-mail válido").optional(),
}) {}
