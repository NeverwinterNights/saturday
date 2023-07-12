import s from './packs-table.module.scss'

import { Play } from '@/assets/icons/Play.tsx'
import photo from '@/assets/images/react.png'
import { TablePackIcons } from '@/components/ui/table/icons/tableIcons.tsx'
import { Table } from '@/components/ui/table/table.tsx'

export const PacksTable = () => {
  const packsData = [
    {
      id: '01',
      name: 'Pack Name',
      deckCover: true,
      card: '4',
      userId: '1111',
      lastUpdate: '18.03.2021',
      createdBy: 'Ivan Ivanov',
    },
    {
      id: '02',
      name: 'Pack Name',
      deckCover: false,
      userId: '0000',
      card: '4',
      lastUpdate: '18.03.2021',
      createdBy: 'Ivan Ivanov',
    },
    {
      id: '03',
      name: 'Pack Name',
      deckCover: true,
      userId: '1111',
      card: '4',
      lastUpdate: '18.03.2021',
      createdBy: 'Ivan Ivanov',
    },
  ]
  const myId = '0000'

  return (
    <div>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell style={{ width: '261px' }} align="left">
              Name
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '141px' }} align="left">
              Cards
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '201px' }} align="left">
              Last Updated
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '286px' }} align="left">
              Created by
            </Table.HeadCell>
            <Table.HeadCell style={{ width: '117px' }} />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {packsData.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>
                <div className={s.deckCover}>
                  {item.deckCover && <img src={photo} alt="" />}
                  {item.name}
                </div>
              </Table.Cell>
              <Table.Cell>{item.card}</Table.Cell>
              <Table.Cell>{item.lastUpdate}</Table.Cell>
              <Table.Cell>{item.createdBy}</Table.Cell>
              <Table.Cell align="center">
                {/*если пак не наш, то показываем только 1 иконку*/}
                {myId !== item.userId ? <TablePackIcons /> : <Play />}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
