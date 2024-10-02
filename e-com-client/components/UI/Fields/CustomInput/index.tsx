import React, { useState } from "react";
import {
  useFormContext,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface FormFieldProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  rules?: object;
  className?: string;
  mn?: string;
  showLabel?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  type = "text",
  placeholder,
  rules,
  className,
  label,
  mn,
  showLabel = true,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  // Handle errors for nested fields (e.g., teamMembers[0].name)
  const getNestedError = (name: string) => {
    return name
      .split(".")
      .reduce((obj: any, key: string) => obj?.[key], errors);
  };

  const error:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined = getNestedError(name);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={`form-field relative w-full ${mn}`}>
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
          <input
            {...field}
            id={name}
            type={
              type === "password" && !passwordVisible
                ? "password"
                : passwordVisible
                ? "text"
                : type
            }
            className={`${className} ${
              error?.message && "border-2 border-red-500 border-solid"
            } outline-none mt-2`}
            placeholder={`${placeholder} *`}
          />
        )}
      />
      {type === "password" && (
        <span
          className="absolute right-3 top-4 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
        </span>
      )}
      {/* {error?.message && (
        <p className="text-red-500 text-sm mt-1">{error?.message as string}</p>
      )} */}
    </div>
  );
};

export default FormField;
