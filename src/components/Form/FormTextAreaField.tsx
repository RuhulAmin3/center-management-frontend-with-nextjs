import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { inputDefaultStyle } from "@/app/constants/styles";
type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  required?: boolean;
};

const FormTextAreaField = ({
  name,
  label,
  rows,
  value,
  required,
  placeholder,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <>
      <div className={`flex flex-col  w-full`}>
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
            <Input.TextArea
              rows={rows}
              placeholder={placeholder}
              {...field}
              defaultValue={value}
              style={{ width: "100%", ...inputDefaultStyle }}
            />
          )}
        />
      </div>
    </>
  );
};

export default FormTextAreaField;
