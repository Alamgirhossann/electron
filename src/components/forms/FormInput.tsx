"use client";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "antd";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  change?: (e: any) => void;
}

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  change,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  // console.log(value);

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              // onChange={change}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              style={{ outlineColor: "none" }}
              // onChange={change}
            />
          )
        }
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormInput;
