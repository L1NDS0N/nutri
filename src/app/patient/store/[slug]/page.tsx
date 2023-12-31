"use client";

import StorePatientPage from "../page";

export default function UpdatePatient({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return StorePatientPage('',{ id: slug });
}
