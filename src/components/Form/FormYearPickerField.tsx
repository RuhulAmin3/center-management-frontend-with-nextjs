import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import { DatePicker } from "antd";

const FormYearPickerField = ({
  name,
  label,
  picker,
  size,
  required,
}: {
  name: string;
  label?: string;
  picker?: "year" | "time";
  size?: "large" | "small";
  required?: boolean;
}) => {
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
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            defaultValue={dayjs(field.value) || Date.now()}
            size={size}
            // {...field}
            // value={dayjs(field.value)}
            // onChange={handleOnChange}
            picker={picker}
            style={{
              width: "100%",
              background: "#f0f1f3",
              border: "none",
              height: "50px",
            }}
          />
        )}
      />
    </>
  );
};

export default FormYearPickerField;
