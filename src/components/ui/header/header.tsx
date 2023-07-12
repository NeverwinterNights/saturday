import { memo } from 'react'

import { Button } from '../button'
import { Dropdown, DropdownItem, DropdownItemWithIcon } from '../dropdown'
import { Typography } from '../typography'

import styles from './header.module.scss'

import { LogOutIcon } from '@/assets/icons/LogOutIcon.tsx'
import { Person } from '@/assets/icons/Person.tsx'
import logo from '@/assets/images/logo.png'
import { Avatar } from '@/components/ui/avatar'
import { Container } from '@/components/ui/container/container.tsx'

type HeaderPropsType = {
  isAuth: boolean
  name?: string
  avatar?: string
  email?: string
  onSignIn?: () => void
  onSignOut: () => void
  onProfileClick: () => void
}

export const Header = memo(
  ({
    isAuth,
    name = 'NoName',
    avatar,
    email = 'NoNameEmail@.com',
    onSignIn,
    onSignOut,
    onProfileClick,
  }: HeaderPropsType) => {
    return (
      <div className={styles.main}>
        <Container className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.rightItem}>
            {!isAuth ? (
              <div className={styles.button}>
                <Button onClick={onSignIn} variant="primary">
                  Sign In
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
                  <DropdownItem onSelect={() => alert(name)}>
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
                    text="Profile"
                    onSelect={onProfileClick}
                  />
                  <DropdownItemWithIcon
                    icon={<LogOutIcon />}
                    text="Sign out"
                    onSelect={onSignOut}
                  />
                </Dropdown>
              </div>
            )}
          </div>
        </Container>
      </div>
    )
  }
)
