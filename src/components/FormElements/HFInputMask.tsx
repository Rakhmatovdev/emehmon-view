import { Typography } from 'antd'
import { Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'

function HFInputMask({
  control,
  name = '',
  disabledHelperText = false,
  required = false,
  rules = {},
  ...props
}: any): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={{
        required: required ? 'Это объязательная поля!' : false,
        ...rules,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <InputMask
            {...props}
            // eslint-disable-next-line no-nonoctal-decimal-escape
            mask="+\9\98 (99) 999-99-99"
            className="border-[1px] border-solid border-[#E5E7EB] rounded-lg h-[40px] w-full px-[10px] text-[#1E1E1E] text-sm font-normal dark:bg-[#272B30] dark:border-[#272B30] hover:dark:bg-[#272B30] focus:dark:bg-[#272B30]"
            value={value}
            onChange={(e) => {
              onChange(e.target.value)
            }}
            style={{
              border: error ? '1px solid #ff4d4f' : '',
            }}
          />
          {error && !disabledHelperText && (
            <Typography.Text type="danger">{error.message}</Typography.Text>
          )}
        </>
      )}
    />
  )
}

export default HFInputMask
