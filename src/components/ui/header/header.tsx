import { memo } from 'react'

import { Button } from '../button'
import { Typography } from '../typography'

import logo from './../../../assets/images/logo.png'
import styles from './header.module.scss'

type HeaderPropsType = {
  isAuth?: boolean
  name?: string
  img?: string
}

export const Header = memo(({ isAuth, name, img }: HeaderPropsType) => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.rightItem}>
        {!isAuth ? (
          <div className={styles.button}>
            <Button variant="primary">Sign In</Button>
          </div>
        ) : (
          <div className={styles.info}>
            <div className={styles.name}>
              <Typography className={styles.textName} variant="subtitle1">
                {name}
              </Typography>
            </div>
            <div className={styles.avatar}>
              <img src={img} alt={'avatar'} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
})
