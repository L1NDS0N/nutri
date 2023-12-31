"use client";
import { XForm } from "@/components/XForm";
import { useToast } from "@/contexts/ToastContext";
import { Patient } from "@/models/patient.model";
import { initialLoadingTypes } from "@/services/api/loading-crud.service";
import { PatientService } from "@/services/api/patient.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FilterMatchMode } from "primereact/api";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { BsPersonFillAdd, BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

export default function PatientPage() {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [patients, setPatients] = useState<Patient[]>();
  const [patientRequest, setPatientRequest] = useState(initialLoadingTypes);
  const patientService = new PatientService({ setLoading: setPatientRequest });
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    patientService.index().then(({ data }) => {
      setPatients(data);
    });
  }, []);

  const onGlobalFilterChange = (event: any) => {
    const value = event.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <div className="flex flex-1 flex-col">
        <span className="p-input-icon-left">
          <BsSearch />
          <InputText onInput={onGlobalFilterChange} placeholder="Buscar..." />
        </span>
      </div>

      <div className="flex flex-1 justify-end">
        <Link href={"/patient/store"}>
          <Button icon={<FaPlus size={12} />} severity="success" label="Novo" />
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <XForm
        legend="Paciente"
        breadCrumbProps={{
          home: { url: "/patient", label: "Paciente", icon: BsPersonFillAdd },
        }}
      >
        <DataTable
          header={header}
          filters={filters}
          resizableColumns
          selectionMode="single"
          dataKey="id"
          paginator
          sortField="name"
          rows={5}
          stripedRows
          removableSort
          value={patients}
          rowsPerPageOptions={[5, 10, 25, 50]}
          loading={patientRequest.isLoading}
          onRowClick={(e) => {
            router.push("patient/store/" + e.data.id);
          }}
        >
          <Column sortable field="name" header="Nome" />
          <Column sortable field="phone" header="Telefone" />
          <Column sortable field="email" header="E-mail" />
        </DataTable>
      </XForm>
    </>
  );
}
