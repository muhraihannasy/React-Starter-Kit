import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";
import FieldWrapper, { FieldWrapperPassThroughProps } from "./FieldWrapper";

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "password";
  className?: string;
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
};

const InputField = (props: InputFieldProps) => {
  const {
    type = "text",
    label,
    placeholder,
    className,
    registration,
    error,
  } = props;

  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={clsx("", className)}
        {...registration}
        placeholder={placeholder}
      />
    </FieldWrapper>
  );
};

export default InputField;
