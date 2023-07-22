import * as Slider from '@radix-ui/react-slider'

import { Input } from '../input'

import styles from './slider-сomponent.module.scss'

import { Typography } from '@/components/ui/typography'

type SliderPropsType = {
  defaultValue: [number, number]
  value: [number, number]
  // setValue: Dispatch<SetStateAction<[number, number]>>
  setValue: (value: [number, number]) => void
  min?: number
  max?: number
  label?: string
}

export const SliderComponent = ({
  defaultValue,
  min = 0,
  max = 100,
  value,
  label,
  setValue,
}: SliderPropsType) => {
  const onSliderChange = (value: [number, number]) => {
    setValue(value)
  }

  // const onValueChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
  //   setValue(state => {
  //     return index === 0
  //       ? [+event.currentTarget.value, state[1]]
  //       : [state[0], +event.currentTarget.value]
  //   })
  // }

  return (
    <form>
      <div className={styles.container}>
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
            min={min}
            max={max}
            onValueChange={onSliderChange}
            className={styles.SliderRoot}
            defaultValue={defaultValue}
            step={1}
            minStepsBetweenThumbs={1}
            value={value}
          >
            <Slider.Track className={styles.SliderTrack}>
              <Slider.Range className={styles.SliderRange} />
            </Slider.Track>

            <Slider.Thumb className={styles.SliderThumb} aria-label="Start" />
            <Slider.Thumb className={styles.SliderThumb} aria-label="End" />
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
