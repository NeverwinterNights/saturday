import { ArrowDownIcon } from '@/assets/icons/ArrowDown.tsx'
import { ArrowLeft } from '@/assets/icons/ArrowLeft.tsx'
import { Check } from '@/assets/icons/Check.tsx'
import { ClosedInputIcon } from '@/assets/icons/CloseInputIcon.tsx'
import { CloseModal } from '@/assets/icons/CloseModal.tsx'
import { Edit } from '@/assets/icons/Edit.tsx'
import { Eye } from '@/assets/icons/Eye.tsx'
import { EyeClosed } from '@/assets/icons/EyeClosed.tsx'
import { KeyboardArrowLeft } from '@/assets/icons/KeyboardArrowLeft.tsx'
import KeyboardArrowRight from '@/assets/icons/KeyboardArrowRight.tsx'
import { LogOutIcon } from '@/assets/icons/LogOutIcon.tsx'
import { MailIcon } from '@/assets/icons/MailIcom.tsx'
import { More } from '@/assets/icons/More.tsx'
import { Person } from '@/assets/icons/Person.tsx'
import { SearchIcon } from '@/assets/icons/SearchIcon.tsx'
import StarEmpty from '@/assets/icons/StarEmpty.tsx'
import StarFilled from '@/assets/icons/StarFilled.tsx'
import { Trash } from '@/assets/icons/Trash.tsx'

const meta = {
  title: 'Icons/General',
  component: ArrowLeft,
  tags: ['autodocs'],
}

export default meta
export const AllIcons = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <ArrowDownIcon size={16} />
        <ArrowLeft />
        <Check />
        <ClosedInputIcon />
        <CloseModal />
        <Edit />
        <Eye />
        <EyeClosed />
        <KeyboardArrowLeft />
        <KeyboardArrowRight />
        <LogOutIcon />
        <MailIcon />
        <More />
        <Person />
        <SearchIcon />
        <StarEmpty />
        <StarFilled />
        <Trash />
      </div>
    )
  },
}
