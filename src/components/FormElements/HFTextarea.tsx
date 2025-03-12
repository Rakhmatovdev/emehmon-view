import { Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Controller } from 'react-hook-form'

function HFTextarea({
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
          <TextArea
            value={value}
            onChange={(e) => {
              onChange(e.target.value)
            }}
            className="border border-[#E5E7EB] rounded-lg h-[40px] w-full px-[10px] text-[#1E1E1E] text-sm font-normal dark:bg-[#272B30] dark:border-[#272B30] hover:dark:bg-[#272B30] focus:dark:bg-[#272B30]"
            name={name}
            status={error ? 'error' : 'success'}
            error={error}
            helperText={!disabledHelperText && (error?.message ?? ' ')}
            {...props}
          />
          {error && !disabledHelperText && (
            <Typography.Text type="danger">{error.message}</Typography.Text>
          )}
        </>
      )}
    />
  )
}

export default HFTextarea
