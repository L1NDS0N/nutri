import { ImSpinner2 } from "react-icons/im";

type XLoadingProps = {
  isLoading?: boolean;
};
export default function XLoading({ isLoading }: XLoadingProps) {
  if (isLoading) return <ImSpinner2 className="animate-spin" />;
}
