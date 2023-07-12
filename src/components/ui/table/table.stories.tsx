import { Meta } from '@storybook/react'

import photo from '../../../assets/images/react.png'
import { StarRating } from '../rating-stars'

import { TableCardIcons } from './icons/tableCardIcons.tsx'
import { TablePackIcons } from './icons/tableIcons.tsx'
import { Table } from './table.tsx'

export default {
  title: 'Data Display/Table',
  component: Table.Root,
} as Meta<typeof Table.Root>

const packsData = [
  {
    id: '01',
    name: 'Pack Name',
    card: '4',
    lastUpdate: '18.03.2021',
    createdBy: 'Ivan Ivanov',
  },
  {
    id: '02',
    name: 'Pack Name',
    card: '4',
    lastUpdate: '18.03.2021',
    createdBy: 'Ivan Ivanov',
  },
  {
    id: '03',
    name: 'Pack Name',
    card: '4',
    lastUpdate: '18.03.2021',
    createdBy: 'Ivan Ivanov',
  },
]

export const PacksTable = {
  render: (args: any) => <Table.Root {...args} />,

  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell style={{ width: '261px' }} align="left">
              Название
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '141px' }} align="left">
              Описание
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '201px' }} align="left">
              Ссылка
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '286px' }} align="left">
              Тип
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '117px' }} />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {packsData.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={photo} alt="" />
                  {item.name}
                </div>
              </Table.Cell>
              <Table.Cell>{item.card}</Table.Cell>
              <Table.Cell>{item.lastUpdate}</Table.Cell>
              <Table.Cell>{item.createdBy}</Table.Cell>
              <Table.Cell>
                <TablePackIcons />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
}

const cardsData = [
  {
    id: '01',
    question: 'How "This" works in JavaScript?',
    answer: 'This is how "This" works in JavaScript',
    lastUpdate: '18.03.2021',
    grade: 1,
  },
  {
    id: '02',
    question: 'How "This" works in JavaScript?',
    answer: 'This is how "This" works in JavaScript',
    lastUpdate: '18.03.2021',
    grade: 2,
  },
  {
    id: '03',
    question: 'How "This" works in JavaScript?',
    answer: 'This is how "This" works in JavaScript',
    lastUpdate: '18.03.2021',
    grade: 3,
  },
]

export const MyCardsTable = {
  render: (args: any) => <Table.Root {...args} />,

  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell style={{ width: '301px' }} align="left">
              Question
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '301px' }} align="left">
              Answer
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '131px' }} align="left">
              Last updated
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '168px' }} align="left">
              Grade
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '105px' }} />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {cardsData.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.question}</Table.Cell>
              <Table.Cell>{item.answer}</Table.Cell>
              <Table.Cell>{item.lastUpdate}</Table.Cell>
              <Table.Cell>
                <StarRating value={item.grade} />
              </Table.Cell>
              <Table.Cell>
                <TableCardIcons />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
}
export const OtherPeoplesСards = {
  render: (args: any) => <Table.Root {...args} />,

  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell style={{ width: '301px' }} align="left">
              Question
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '301px' }} align="left">
              Answer
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '201px' }} align="left">
              Last updated
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '203px' }} align="left">
              Grade
            </Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {cardsData.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.question}</Table.Cell>
              <Table.Cell>{item.answer}</Table.Cell>
              <Table.Cell>{item.lastUpdate}</Table.Cell>
              <Table.Cell>
                <StarRating value={item.grade} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
}

export const Empty = {
  render: () => <Table.Empty />,
}
