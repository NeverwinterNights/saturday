import { memo, useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import styles from './sliderComponent.module.scss'

export const SliderComponent = memo(() => {
  const [value, setValue] = useState<number[]>([5, 75])

  const onSliderChange = (value: number[]) => {
    setValue(value)
  }

  return (
    <form>
      <div className={styles.container}>
        <div className={styles.value}>{value[0]}</div>
        <Slider.Root
          min={5}
          max={75}
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
        <div className={styles.value}>{value[1]}</div>
      </div>
    </form>
  )
})
