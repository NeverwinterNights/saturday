import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import styles from './checkbox.module.scss'

import { Check } from '@/assets/icons/Check.tsx'

export type CheckboxProps = {
  className?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
  position?: 'left'
  errorMessage?: string
}

export const CheckboxItem = ({
  checked,
  onChange,
  disabled,
  required,
  position,
  className,
  label,
  id,
  errorMessage,
}: CheckboxProps) => {
  const classNames = {
    container: clsx(styles.container, className),
    buttonWrapper: clsx(
      styles.buttonWrapper,
      disabled && styles.disabled,
      position === 'left' && styles.left
    ),
    root: styles.root,
    indicator: styles.indicator,
    label: clsx(styles.label, disabled && styles.disabled),
  }

  return (
    <>
      <div className={classNames.container}>
        <LabelRadix.Root asChild>
          <Typography className={styles.wrap} as={'label'} variant="body2">
            <div className={classNames.buttonWrapper}>
              <CheckboxRadix.Root
                className={classNames.root}
                checked={checked}
                onCheckedChange={onChange}
                disabled={disabled}
                required={required}
                id={id}
              >
                {checked && (
                  <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                    <Check disabled={disabled ? disabled : false} />
                  </CheckboxRadix.Indicator>
                )}
              </CheckboxRadix.Root>
            </div>
            {label}
          </Typography>
        </LabelRadix.Root>
      </div>
      {errorMessage && (
        <Typography variant="body2" className={styles.errorMessage}>
          {errorMessage}
        </Typography>
      )}
    </>
  )
}

// <LabelRadix.Root asChild>
//   <div className={styles.container}>
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <Checkbox.Root
//         ref={ref}
//         checked={checked}
//         onCheckedChange={() => setChecked(state => !state)}
//         className={styles.CheckboxRoot}
//         disabled={disabled}
//         defaultChecked
//         id="c1"
//         {...props}
//       >
//         {checked && (
//           <Checkbox.Indicator className={styles.indicator}>
//             <Check disabled={disabled ? disabled : false} />
//           </Checkbox.Indicator>
//         )}
//         {label}
//       </Checkbox.Root>
//     </div>
//   </div>
// </LabelRadix.Root>
