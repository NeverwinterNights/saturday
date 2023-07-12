import { ChangeEvent, Dispatch, SetStateAction } from 'react'

import * as Slider from '@radix-ui/react-slider'

import { Input } from '../input'

import styles from './slider-сomponent.module.scss'

type SliderPropsType = {
  defaultValue: [number, number]
  value: [number, number]
  setValue: Dispatch<SetStateAction<[number, number]>>
  min?: number
  max?: number
}

export const SliderComponent = ({
  defaultValue,
  min = 0,
  max = 100,
  value,
  setValue,
}: SliderPropsType) => {
  const onSliderChange = (value: [number, number]) => {
    setValue(value)
  }

  const onValueChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    setValue(state => {
      return index === 0
        ? [+event.currentTarget.value, state[1]]
        : [state[0], +event.currentTarget.value]
    })
  }

  return (
    <form>
      <div className={styles.container}>
        <div>
          <Input
            inputTextClassName={styles.textInp}
            className={styles.value}
            value={value[0]}
            onChange={event => onValueChange(event, 0)}
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
            inputTextClassName={styles.textInp}
            className={styles.value}
            value={value[1]}
            onChange={event => onValueChange(event, 1)}
          />
        </div>
      </div>
    </form>
  )
}
