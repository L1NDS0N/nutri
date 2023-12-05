import Prisma from "@/server/lib/prisma/client";
import { TGenericRepository } from "./generic-repository-impl";
import { Patient } from "@prisma/client";


export class PatientRepository extends TGenericRepository<Patient> {
    constructor() {
        super(Prisma.new().patient)
    }
}