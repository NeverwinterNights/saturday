import { ChangeEvent, memo, useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import { Input } from '../input'

import styles from './sliderComponent.module.scss'

export const SliderComponent = memo(() => {
  const [value, setValue] = useState<number[]>([5, 75])

  const onSliderChange = (value: number[]) => {
    setValue(value)
  }

  const onValueChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    setValue(state => {
      return [state[index], +event.currentTarget.value]
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
          min={0}
          max={100}
          onValueChange={onSliderChange}
          className={styles.SliderRoot}
          defaultValue={[5, 75]}
          step={1}
          minStepsBetweenThumbs={1}
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
})
