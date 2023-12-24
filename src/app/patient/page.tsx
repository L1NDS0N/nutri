"use client";
import { XForm } from "@/components/XForm";
import { useToast } from "@/contexts/ToastContext";
import { Patient } from "@/models/patient.model";
import { initialLoadingTypes } from "@/services/api/loading-crud.service";
import { PatientService } from "@/services/api/patient.service";
import Link from "next/link";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useEffect, useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";

export default function PatientPage() {
  const [patients, setPatients] = useState<Patient[]>();
  const [patientRequest, setPatientRequest] = useState(initialLoadingTypes);
  const patientService = new PatientService({ setLoading: setPatientRequest });
  const toast = useToast();

  useEffect(() => {
    patientService.index().then(({ data }) => {
      console.log(data);
      setPatients(data);
    });
  }, []);

  return (
    <>
      <XForm
        legend="Paciente"
        breadCrumbProps={{
          home: { url: "/patient", label: "Paciente", icon: BsPersonFillAdd },
        }}
      >
        <div className="flex flex-1 justify-end">
          <Link href={"/patient/store"}>
            <Button>Novo</Button>
          </Link>
        </div>
        <DataTable value={patients} loading={patientRequest.isLoading}>
          <Column field="name" header="Nome" />
          <Column field="phone" header="Telefone" />
        </DataTable>
      </XForm>
    </>
  );
}
