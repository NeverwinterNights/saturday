import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import { Button } from '../button'
import { Typography } from '../typography'

import s from './table.module.scss'

import { useTranslate } from '@/i18n.ts'

export type RootProps = ComponentProps<'table'>

export const Root: FC<RootProps> = ({ className, ...rest }) => {
  const classNames = {
    table: clsx(className, s.table),
  }

  return <table className={classNames.table} {...rest} />
}

export type HeadProps = ComponentProps<'thead'>

export const Head: FC<HeadProps> = props => {
  return <thead {...props} />
}

export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = props => {
  return <tbody {...props} />
}

export type RowProps = ComponentProps<'tr'>

export const Row: FC<RowProps> = props => {
  return <tr {...props} />
}

export type HeadCellProps = ComponentProps<'th'>

export const HeadCell: FC<HeadCellProps> = ({ className, ...rest }) => {
  const classNames = {
    headCell: clsx(className, s.headCell),
  }

  return <th className={classNames.headCell} {...rest} />
}

export type CellProps = ComponentProps<'td'>

export const Cell: FC<CellProps> = ({ className, ...rest }) => {
  const classNames = {
    cell: clsx(className, s.tableCell),
  }

  return <td className={classNames.cell} {...rest} />
}

export const Empty: FC<ComponentProps<'div'> & { mt?: string; mb?: string }> = ({
  className,
  mt = '69px',
  mb = '30px',
}) => {
  const t = useTranslate()
  const classNames = {
    empty: clsx(className, s.empty),
  }

  return (
    <div className={classNames.empty}>
      <Typography variant="body1" color={'secondary'} style={{ marginTop: mt, marginBottom: mb }}>
        {t('This pack is empty. Click add new card to fill this pack')}
      </Typography>
      <Button variant="primary">{t('Add New Card')}</Button>
    </div>
  )
}

export const Table = {
  Root,
  Head,
  Body,
  Row,
  HeadCell,
  Cell,
  Empty,
}
