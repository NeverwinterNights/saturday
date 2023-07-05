import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { CheckboxItem, CheckboxProps } from '../checkbox'

type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'rules' | 'defaultValues'> &
  Omit<CheckboxProps, 'onChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  className,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    shouldUnregister,
    control,
  })

  const handleChange = onChange as (value: boolean) => void

  return (
    <CheckboxItem
      errorMessage={error?.message}
      checked={value}
      onChange={handleChange}
      className={className}
      {...rest}
    />
  )
}
