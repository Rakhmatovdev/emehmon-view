/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Flex, Typography } from "antd";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";

const { RangePicker } = DatePicker;

function HFDateRangePicker({
  control,
  name = "",
  disabledHelperText = false,
  required = false,
  rules = {},
  ...props
}: {
  control: any;
  name: string;
  disabledHelperText?: boolean;
  required?: boolean;
  rules?: any;
  [x: string]: any;
}): JSX.Element {
  const convertDateStringToDayjsObject = (dates: [string, string] | null): any =>
    dates ? [dayjs(dates[0]), dayjs(dates[1])] : null;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={null}
      rules={{
        required: required ? "Это объязательная поля!" : false,
        ...rules,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Flex vertical className="w-full">
          <RangePicker
            value={value ? convertDateStringToDayjsObject(value) : null}
            onChange={(dates: any, dateStrings: [string, string]) => {
              console.log(dates);
              onChange(dateStrings);
            }}
            status={error ? "error" : ("success" as any)}
            className="border border-[#E5E7EB] rounded-lg h-[40px] w-full px-[10px] text-[#1E1E1E] text-sm font-normal"
            {...props}
          />

          {error && !disabledHelperText && (
            <Typography.Text type="danger">{error.message}</Typography.Text>
          )}
        </Flex>
      )}
    />
  );
}

export default HFDateRangePicker;
