import s from './cards-table.module.scss'

import { StarRating } from '@/components/ui/rating-stars'
import { ReadMore } from '@/components/ui/read-more'
import { TableCardIcons } from '@/components/ui/table/icons/tableCardIcons.tsx'
import { Table } from '@/components/ui/table/table.tsx'

export const CardsTable = () => {
  //это типа нам данные будут приходить с сервера)
  const cardsData = [
    {
      id: '01',
      question: 'How "This" works in JavaScript?',
      answer: 'This is how "This" works in JavaScript',
      lastUpdate: '18.03.2021',
      //это мы условно загружаем наши карточки
      //у нас быдет или наше Id или не наше ('lox'-'nelox')
      userId: 'lox',
      grade: 1,
    },
    {
      id: '02',
      question: 'How "This" works in JavaScript?',
      answer:
        'This is how "This" works in JavaScript in JavaScript in JavaScript in JavaScript in JavaScript',
      lastUpdate: '18.03.2021',
      userId: 'lox',
      grade: 2,
    },
    {
      id: '03',
      question: 'How "This" works in JavaScript?',
      answer: 'This is how "This" works in JavaScript',
      lastUpdate: '18.03.2021',
      userId: 'lox',
      grade: 3,
    },
  ]
  //это мы берем наше айди, что бы понять чьи карты(откуда и как берём пока не знаю)
  const myId = 'nelox'

  return (
    <div>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell style={{ width: '301px' }} align="left">
              Question
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '301px' }} align="left">
              Answer
            </Table.HeadCell>
            <Table.HeadCell
              className={`${s.lastUpdatedMy} ${
                myId === cardsData[0].userId ? s.lastUpdatedOther : ''
              }`}
              align="left"
            >
              Last updated
            </Table.HeadCell>
            <Table.HeadCell
              className={`${s.gradeMy} ${myId === cardsData[0].userId ? s.gradeOther : ''}`}
              align="left"
            >
              Grade
            </Table.HeadCell>
            {/*//пока что условность, тут мы узнаем наш это айди или нет и отрисовываем,
            //почему можно взять условно любой userId любой карты? потому что в прогрмме мы подкружаем либо наши карточки либо нет*/}
            {myId !== cardsData[0].userId ? <Table.HeadCell style={{ width: '105px' }} /> : ''}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {cardsData.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.question}</Table.Cell>
              <Table.Cell>
                <ReadMore text={item.answer} maxLength={60} />
              </Table.Cell>
              <Table.Cell>{item.lastUpdate}</Table.Cell>
              <Table.Cell>
                <StarRating value={item.grade} />
              </Table.Cell>
              {myId !== item.userId ? (
                <Table.Cell>
                  <TableCardIcons />
                </Table.Cell>
              ) : (
                ''
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
