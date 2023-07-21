import { Control } from 'react-hook-form'

import styles from '@/components/info-cards/add-edit-card/add-edit-new-card.module.scss'
import { ControlledInput } from '@/components/ui/controlled'

type TypeTextProp = {
  control: Control<{ question: string; answer: string }, any>
}

export const TypeText = ({ control }: TypeTextProp) => {
  return (
    <>
      <div className={styles.input}>
        <ControlledInput label={'Question'} name={'question'} control={control} />
      </div>
      <div className={styles.input}>
        <ControlledInput label={'Answer'} name={'answer'} control={control} />
      </div>
    </>
  )
}
