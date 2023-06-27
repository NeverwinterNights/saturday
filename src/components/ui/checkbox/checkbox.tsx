// import styles from './checkbox.module.scss'
import { useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'

import { Check } from '../../../assets/icons/Check.tsx'

export const CheckboxItem = () => {
  const [checked, setChecked] = useState(false)

  return (
    <form>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox.Root
          checked={checked}
          onCheckedChange={() => setChecked(state => !state)}
          className="CheckboxRoot"
          defaultChecked
          id="c1"
        >
          {/*<Checkbox.Indicator className="CheckboxIndicator">*/}
          {/*  <CheckIcon />*/}
          {/*</Checkbox.Indicator>*/}
          {checked && (
            <Checkbox.Indicator>
              <Check />
            </Checkbox.Indicator>
          )}
        </Checkbox.Root>
        <label className="Label" htmlFor="c1"></label>
      </div>
    </form>

    // <div className={classNames.container}>
    //   <LabelRadix.Root asChild>
    //     <Typography variant="body2" className={classNames.label} as={'label'}>
    //       <div className={classNames.buttonWrapper}>
    //         <CheckboxRadix.Root
    //             className={classNames.root}
    //             checked={checked}
    //             onCheckedChange={onChange}
    //             disabled={disabled}
    //             required={required}
    //             id={id}
    //         >
    //           {checked && (
    //               <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
    //                 <Check />
    //               </CheckboxRadix.Indicator>
    //           )}
    //         </CheckboxRadix.Root>
    //       </div>
    //       {label}
    //     </Typography>
    //   </LabelRadix.Root>
    // </div>
  )
}
