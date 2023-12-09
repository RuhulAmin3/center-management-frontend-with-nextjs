import { DatePicker, DatePickerProps } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type DatePickerPropsType = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
  style?: Record<string, string>;
  required?: boolean;
};

const FormDatePickerField = ({
  name,
  label,
  onChange,
  size = "large",
  style,
  required,
}: DatePickerPropsType) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, new Date(dateString).toISOString());
  };

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
            onChange={handleOnChange}
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

export default FormDatePickerField;
