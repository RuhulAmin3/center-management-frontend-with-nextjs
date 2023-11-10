"use client";
import { Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type FormInputFieldType = {
  type?: string;
  name: string;
  id?: string;
  label?: string;
  style?: Record<string, string>;
  value?: string | string[];
  size: "large" | "small";
  validation?: Record<string, any>;
  placeholder?: string;
  required?: boolean;
};

const FormInputField = ({
  type = "text",
  name,
  label,
  validation,
  placeholder,
  required,
  size,
  style,
  value,
  id,
}: FormInputFieldType) => {
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
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              required={required}
              style={style}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              required={required}
              style={style}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
    </>
  );
};

export default FormInputField;
