import { BreadCrumb, BreadCrumbProps } from "primereact/breadcrumb";
import { Card } from "primereact/card";
import type { FormHTMLAttributes, ReactNode } from "react";

type XFormProps = {
  legend: string;
  children: ReactNode;
  breadCrumbProps: BreadCrumbProps;
} & FormHTMLAttributes<HTMLFormElement>;
export function XForm({
  legend,
  children,
  breadCrumbProps,
  ...rest
}: XFormProps) {
  return (
    <Card>
      {breadCrumbProps && <BreadCrumb {...breadCrumbProps} />}
      <form
        {...rest}
        className="mx-auto my-4 p-6 bg-white rounded-md shadow-md"
      >
        {children}
      </form>
    </Card>
  );
}
