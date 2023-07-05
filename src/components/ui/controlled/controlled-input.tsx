import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Input, InputPropsType } from '../input'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<InputPropsType, 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  className,
  ...rest
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  return <Input error={error?.message} className={className} {...field} {...rest} />
}
