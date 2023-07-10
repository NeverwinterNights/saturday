import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { StarRating } from './rating-stars.tsx'

export default {
  title: 'Components/StarRating',
  component: StarRating,
  tags: ['autodocs'],
} satisfies Meta<typeof StarRating>

export const WithZeroValue = {
  args: {
    value: 0,
  },
}
export const Interactive = {
  args: {
    value: 0,
    isInteractive: true,
  },
}
export const WithChanges = {
  render: () => {
    const [changes, setChanges] = useState<boolean>(false)

    return (
      <>
        <StarRating isInteractive={true} onChanged={() => setChanges(true)} value={0} />
        <div>{changes ? 'Some Changes' : 'No Changes'}</div>
      </>
    )
  },
}
