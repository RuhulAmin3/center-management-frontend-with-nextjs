"use client";

import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import { inputDefaultStyle } from "@/app/constants/styles";
export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  selectOptions: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  required?: boolean;
  defaultValue?: SelectOptions;
  handleChange?: (el: string) => void;
};

const FormSelectField = ({
  name,
  size = "large",
  value,
  placeholder = "select",
  selectOptions,
  label,
  defaultValue,
  handleChange,
  required,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      <span style={{ marginBottom: "10px", display: "inline-block" }}>
        {label ? label : null}
        {required ? (
          <span
            style={{
              color: "red",
            }}
          >
            *
          </span>
        ) : null}
      </span>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            showSearch
            onChange={handleChange ? handleChange : onChange}
            size="large"
            options={selectOptions}
            value={value}
            style={{ width: "100%", height: "50px" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
