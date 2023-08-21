import * as Slider from '@radix-ui/react-slider'

import { Input } from '../input'

import styles from './slider-сomponent.module.scss'

import { Typography } from '@/components/ui/typography'
import { useTranslate } from '@/i18n.ts'

type SliderPropsType = {
  defaultValue?: [number, number]
  value: [number, number]
  onValueCommit?: (value: [number, number]) => void
  setValue: (value: [number, number]) => void
  min?: number
  max?: number
  label?: string
  disabled?: boolean
}

export const SliderComponent = ({
  disabled,
  defaultValue,
  min = 0,
  max = 100,
  onValueCommit,
  value,
  label,
  setValue,
}: SliderPropsType) => {
  const t = useTranslate()

  const onSliderChange = (value: [number, number]) => {
    setValue(value)
  }

  return (
    <form>
      <div className={`${styles.container} ${disabled ? styles.disabled : ''}`}>
        <div className={styles.label}>
          <Typography variant="body2">{label}</Typography>
        </div>
        <div className={styles.main}>
          <div>
            <Input
              inputTextClassName={styles.input}
              className={styles.value}
              value={value[0]}
              // onChange={event => onValueChange(event, 0)}
              onChange={() => {}}
            />
          </div>
          <Slider.Root
            disabled={disabled}
            min={min}
            max={max}
            onValueChange={onSliderChange}
            className={styles.SliderRoot}
            defaultValue={defaultValue}
            step={1}
            minStepsBetweenThumbs={1}
            value={value}
            onValueCommit={onValueCommit}
          >
            <Slider.Track className={styles.SliderTrack}>
              <Slider.Range className={styles.SliderRange} />
            </Slider.Track>

            <Slider.Thumb className={styles.SliderThumb} aria-label={t('Start')} />
            <Slider.Thumb className={styles.SliderThumb} aria-label={t('End')} />
          </Slider.Root>
          <div>
            <Input
              inputTextClassName={styles.input}
              className={styles.value}
              value={value[1]}
              // onChange={event => onValueChange(event, 1)}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    </form>
  )
}
