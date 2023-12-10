import type { FormHTMLAttributes, ReactNode } from "react";

type XFormProps = {
  title: string;
  children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;
export function XForm({ title, children, ...rest }: XFormProps) {
  return (
    <form
      {...rest}
      className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <hr className="m-4" />
      {children}
    </form>
  );
}
