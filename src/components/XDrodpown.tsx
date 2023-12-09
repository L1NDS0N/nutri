import { Dropdown, DropdownProps } from "primereact/dropdown";
import { FaChevronDown } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

export function XDropdown({
  loading,
  ...rest
}: { loading?: boolean } & DropdownProps) {
  return (
    <Dropdown
    filter
    showClear
      dropdownIcon={loading ? <ImSpinner2 /> : <FaChevronDown />}
      disabled={loading}
      emptyMessage={"Nenhum encontrado"}
      emptyFilterMessage={"Nenhum encontrado"}
      {...rest}
    />
  );
}
