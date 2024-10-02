import React from "react";
import {
  useFormContext,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";
import ErrorComponent from "../../Error/FormError";

interface FormTextAreaProps {
  name: string;
  label: string;
  placeholder?: string;
  rules?: object;
  className?: string;
  rows?: number;
  disabled?: boolean;
  mn?: string;
  showLabel?: boolean;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  name,
  placeholder,
  rules,
  className,
  rows = 3,
  disabled,
  mn,
  label,
  showLabel = true,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined = errors[name];

  return (
    <div className={`form-field ${mn}`}>
      {showLabel ? (
        <label className="text-gray-500" htmlFor={name}>{`${label}`}</label>
      ) : (
        ""
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <textarea
            {...field}
            id={name}
            className={`${className} ${disabled ? "bg-gray-100" : ""} ${
              error?.message && "border-2 border-red-500 border-solid"
            } outline-none mt-2`}
            placeholder={`${placeholder}`}
            rows={rows}
            disabled={disabled}
          />
        )}
      />
      {/* <ErrorComponent error={error} /> */}
    </div>
  );
};

export default FormTextArea;
