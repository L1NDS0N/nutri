import { Fieldset, FieldsetProps } from "primereact/fieldset";
import { IconType } from "primereact/utils";
import type { FormHTMLAttributes, ReactNode } from "react";

type XFormProps = {
  legend: string;
  children: ReactNode;
  icon?: IconType<FieldsetProps>;
} & FormHTMLAttributes<HTMLFormElement>;
export function XForm({ legend, children, icon, ...rest }: XFormProps) {
  return (
    <div>
      <Fieldset legend={legend} toggleable collapseIcon={icon} expandIcon={icon} onToggle={() => {}}>
        <form
          {...rest}
          
          className="max-w-3xl mx-auto my-4 p-6 bg-white rounded-md shadow-md"
        >
          {children}
        </form>
      </Fieldset>
    </div>
  );
}
