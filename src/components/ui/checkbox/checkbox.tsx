import { forwardRef, useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'

import { Check } from '../../../assets/icons/Check.tsx'

import styles from './checkbox.module.scss'

export const CheckboxItem = forwardRef<
  React.ElementRef<typeof Checkbox.Root>,
  React.ComponentPropsWithoutRef<typeof Checkbox.Root> & {
    label?: string
    disabled?: boolean
  }
>(({ className, disabled, label, ...props }, ref) => {
  const [checked, setChecked] = useState(false)

  return (
    <div className={styles.container}>
      <form>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox.Root
            ref={ref}
            checked={checked}
            onCheckedChange={() => setChecked(state => !state)}
            className={styles.CheckboxRoot}
            disabled={disabled}
            defaultChecked
            id="c1"
            {...props}
          >
            {checked && (
              <Checkbox.Indicator className={styles.indicator}>
                <Check disabled={disabled ? disabled : false} />
              </Checkbox.Indicator>
            )}
          </Checkbox.Root>
          {/*{label && (*/}
          {/*    <label className="Label" htmlFor="c1">*/}
          {/*        label*/}
          {/*    </label>*/}
          {/*)}*/}
          {label}
        </div>
      </form>
    </div>
  )
})
