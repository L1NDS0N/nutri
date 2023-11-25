import { z } from "zod";
import { Z } from "zod-class";

export class Patient extends Z.class({
  id: z.number(),
  name: z.string(),
  gender: z.boolean().nullable(),
  birthday: z.date().nullable(),
  phone: z.string().nullable(),
}) {}
