import { I18NProvider } from '@ayub-begimkulov/i18n'
import type { Meta, StoryObj } from '@storybook/react'

import { LearnPack } from './'

import { i18n } from '@/i18n.ts'

const meta = {
  title: 'Modals/LearnPack',
  component: LearnPack,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LearnPack>

export default meta
type Story = StoryObj<typeof meta>

const optionsPrimary = [
  {
    value: 'Did not know',
    label: 'Did not know',
  },
  {
    value: 'Forgot',
    label: 'Forgot',
  },
  {
    value: 'A lot of thought',
    label: 'A lot of thought',
  },
  {
    value: 'Confused',
    label: 'Confused',
  },
  {
    value: 'Knew the answer',
    label: 'Knew the answer',
  },
]

export const LearnPackComponent: Story = {
  render: () => {
    // const [radioValue, setRadioValue] = useState('Did not know')

    return (
      <I18NProvider i18n={i18n}>
        <LearnPack
          dataHandler={() => {}}
          options={optionsPrimary}
          defaultValue={'Did not know'}
          // onValueChange={setRadioValue}
          answer={'This is how "This" works in JavaScript'}
          numberEfforts={10}
          question={'How "This" works in JavaScript?'}
          packName={'React Language'}
        />
      </I18NProvider>
    )
  },
  args: {
    options: [],
    packName: '',
    question: '',
    numberEfforts: 0,
    answer: '',
  },
}
