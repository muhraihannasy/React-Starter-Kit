import clsx from "clsx";
import React from "react";
import { FieldError } from "react-hook-form";

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  "className" | "children"
>;

const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, className, error, children } = props;

  return (
    <div>
      <label className={clsx("", className)}>
        {label}
        <div className="mt-1">{children}</div>
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message}>
          {error.message}
        </div>
      )}
    </div>
  );
};

export default FieldWrapper;
