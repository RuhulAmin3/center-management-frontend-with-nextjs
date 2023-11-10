"use client";
import { Select } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { inputDefaultStyle } from "@/app/constants/styles";
type SelectOptionsType = {
  label: string;
  value: string;
};

type FormSelectFieldType = {
  name: string;
  id?: string;
  label?: string;
  style?: Record<string, string>;
  value?: string | string[];
  size: "large" | "small";
  validation?: Record<string, any>;
  placeholder?: string;
  required?: boolean;
  selectOptions: SelectOptionsType[];
};

const FormSelectField = ({
  name,
  label,
  validation,
  placeholder,
  required,
  size,
  style,
  value,
  selectOptions,
  id,
}: FormSelectFieldType) => {
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
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            size={size}
            placeholder={placeholder}
            style={{
              width: "100%",
            }}
            {...field}
            options={selectOptions}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
