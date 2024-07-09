import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../button'
import { Dropdown, DropdownItem, DropdownItemWithIcon } from '../dropdown'
import { Typography } from '../typography'

import styles from './header.module.scss'

import { StatusType } from '@/app/app.slice.ts'
import { MainLogo } from '@/assets/icons/Incubator-logo.tsx'
import { LogOutIcon } from '@/assets/icons/LogOutIcon.tsx'
import { Person } from '@/assets/icons/Person.tsx'
import { SecondaryLoader } from '@/assets/loaders/secondary-loader/secondary-loader.tsx'
import { PATH } from '@/common'
import { Avatar } from '@/components/ui/avatar'
import { Container } from '@/components/ui/container/container.tsx'
import { useTranslate } from '@/i18n.ts'

type HeaderPropsType = {
  isAuth: boolean
  name?: string
  avatar?: string
  email?: string
  onSignIn?: () => void
  onSignOut: () => void
  onProfileClick: () => void
  isLoading: StatusType
}

export const Header = ({
  isLoading,
  isAuth,
  name = 'NoName',
  avatar,
  email = 'NoNameEmail@.com',
  onSignIn,
  onSignOut,
  onProfileClick,
}: HeaderPropsType) => {
  const t = useTranslate()
  const navigate = useNavigate()

  return (
    <div className={styles.main}>
      <Container className={styles.container}>
        <div className={styles.logo}>
          <Button variant={'link'} as={Link} to={PATH.PACKS}>
            <MainLogo />
          </Button>
        </div>
        <div className={styles.rightItem}>
          {!isAuth ? (
            <div className={styles.button}>
              <Button onClick={onSignIn} variant="primary">
                {t('Sign In')}
              </Button>
            </div>
          ) : (
            <div className={styles.userTrigger}>
              <Typography variant="subtitle1" className={styles.userName}>
                {name}
              </Typography>

              <Dropdown
                trigger={
                  <button>
                    <Avatar photo={avatar} name={name} />
                  </button>
                }
              >
                <DropdownItem onSelect={() => navigate(PATH.PROFILE)}>
                  <div className={styles.userInfoContainer}>
                    <Avatar photo={avatar} name={name} />
                    <div className={styles.userDetails}>
                      <Typography variant="subtitle2">{name}</Typography>
                      <Typography variant="caption" className={styles.userEmail}>
                        {email}
                      </Typography>
                    </div>
                  </div>
                </DropdownItem>
                <DropdownItemWithIcon
                  icon={<Person />}
                  text={t('Profile')}
                  onSelect={onProfileClick}
                />
                <DropdownItemWithIcon
                  icon={<LogOutIcon />}
                  text={t('Sign out')}
                  onSelect={onSignOut}
                />
              </Dropdown>
            </div>
          )}
        </div>
      </Container>
      {isLoading === 'loading' ? <SecondaryLoader /> : ''}
    </div>
  )
}
