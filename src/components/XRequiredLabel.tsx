import { LabelHTMLAttributes } from 'react';

type RequiredLabelProps = LabelHTMLAttributes<{}> & {
  description: string;
};
export default function XRequiredLabel({
  description,
  ...props
}: RequiredLabelProps) {
  return (
    <label title="Este campo é obrigatório" {...props}>
      {description}{' '}
      <span
        className="text-sm font-bold text-red-600"
        title="Este campo é obrigatório"
      >
        *
      </span>
    </label>
  );
}
