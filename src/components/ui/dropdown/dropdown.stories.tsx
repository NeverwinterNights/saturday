import { Meta, StoryObj } from '@storybook/react'

import { Edit } from '../../../assets/icons/Edit.tsx'
import { Play } from '../../../assets/icons/Play.tsx'
import { Trash } from '../../../assets/icons/Trash.tsx'
import { Button } from '../button'

import { Dropdown, DropdownItemWithIcon } from '.'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

// @ts-ignore
export const Default: Story = {
  render: args => {
    return (
      <div>
        <Dropdown {...args}>
          <>
            <DropdownItemWithIcon icon={<Play />} text="Learn" onSelect={() => {}} />
            <DropdownItemWithIcon icon={<Edit />} text="Edit" onSelect={() => {}} />
            <DropdownItemWithIcon icon={<Trash />} text="Delete" onSelect={() => {}} />
          </>
        </Dropdown>
      </div>
    )
  },
}
export const WithAlign: Story = {
  render: args => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Dropdown {...args}>
          <>
            <DropdownItemWithIcon icon={<Play />} text="Learn" onSelect={() => {}} />
            <DropdownItemWithIcon icon={<Edit />} text="Edit" onSelect={() => {}} />
            <DropdownItemWithIcon icon={<Trash />} text="Delete" onSelect={() => {}} />
          </>
        </Dropdown>
      </div>
    )
  },
  args: {
    children: <></>,
    align: 'center',
  },
}
export const AllDisabled: Story = {
  render: args => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Dropdown {...args}>
          <>
            <DropdownItemWithIcon
              disabled={true}
              icon={<Play />}
              text="Learn"
              onSelect={() => {}}
            />
            <DropdownItemWithIcon disabled={true} icon={<Edit />} text="Edit" onSelect={() => {}} />
            <DropdownItemWithIcon
              disabled={true}
              icon={<Trash />}
              text="Delete"
              onSelect={() => {}}
            />
          </>
        </Dropdown>
      </div>
    )
  },
  args: {
    children: <></>,
    align: 'center',
  },
}

// @ts-ignore
export const WithTriggerButton: Story = {
  render: args => {
    return (
      <div>
        <Dropdown
          trigger={
            <button>
              <Button>Trigger?</Button>
            </button>
          }
          {...args}
        >
          <>
            <DropdownItemWithIcon icon={<Play />} text="Learn" onSelect={() => {}} />
            <DropdownItemWithIcon icon={<Edit />} text="Edit" onSelect={() => {}} />
            <DropdownItemWithIcon icon={<Trash />} text="Delete" onSelect={() => {}} />
          </>
        </Dropdown>
      </div>
    )
  },
}
