import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";
import FieldWrapper, { FieldWrapperPassThroughProps } from "./FieldWrapper";

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
};

const SelectField = (props: SelectFieldProps) => {
  const {
    options,
    defaultValue,
    placeholder,
    label,
    className,
    registration,
    error,
  } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <select
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={clsx("", className)}
        {...registration}
      >
        {options.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};

export default SelectField;
