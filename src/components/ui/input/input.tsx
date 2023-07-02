import * as React from 'react'
import { ChangeEvent, forwardRef, useState } from 'react'

import * as Form from '@radix-ui/react-form'

import { ClosedInputIcon } from '../../../assets/icons/CloseInputIcon.tsx'
import { Eye } from '../../../assets/icons/Eye.tsx'
import { EyeClosed } from '../../../assets/icons/EyeClosed.tsx'
import { SearchIcon } from '../../../assets/icons/SearchIcon.tsx'
import { Typography } from '../typography'

import styles from './input.module.scss'

export const Input = forwardRef<
  React.ElementRef<typeof Form.Root>,
  React.ComponentPropsWithoutRef<typeof Form.Root> & {
    label?: string
    disabled?: boolean
    type?: string
    error?: string
    searchInput?: boolean
    onChange: (value: string) => void
    value: string
  }
>(
  (
    {
      placeholder,
      value,
      onChange,
      label = '',
      searchInput,
      disabled,
      error,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const [iconVisible, setIconVisible] = useState(type)

    const iconClickHandler = (e: any) => {
      e.preventDefault()
      setIconVisible(() => (iconVisible === 'password' ? 'text' : 'password'))
    }

    const onClickWipeInput = () => {
      console.log('value')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.currentTarget.value)
    }

    return (
      <Form.Root ref={ref} {...props} className={disabled ? styles.disabled : styles.main}>
        <Form.Field className="FormField" name={label}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">
              <Typography className={`${styles.label}`} variant="body2">
                {label}
              </Typography>
            </Form.Label>
          </div>
          <div
            className={disabled ? styles.inputContainerDisabled : styles.inputContainer}
            style={
              error
                ? { color: 'var( --color-danger-300 )', borderColor: 'var( --color-danger-300 )' }
                : {}
            }
          >
            <Form.Control asChild>
              <>
                {searchInput && (
                  <span
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    className={styles.icon}
                  >
                    <SearchIcon />
                  </span>
                )}
                <input
                  disabled={disabled}
                  className={styles.input}
                  placeholder={placeholder}
                  type={iconVisible}
                  style={error ? { color: 'var( --color-danger-300 )' } : {}}
                  value={value}
                  onChange={onChangeHandler}
                />
              </>
            </Form.Control>
            {searchInput && value?.length > 0 && (
              <span className={styles.closedImp} onClick={onClickWipeInput}>
                <ClosedInputIcon />
              </span>
            )}
            {(type === 'password' || iconVisible === 'password') && (
              <button disabled={disabled} className={styles.fakebutton} onClick={iconClickHandler}>
                {iconVisible === 'password' ? (
                  <Eye color={disabled ? 'var(--color-dark-100)' : ''} />
                ) : (
                  <EyeClosed color={disabled ? 'var(--color-dark-100)' : ''} />
                )}
              </button>
            )}
          </div>
          {error && (
            <div style={{ margin: '4px 0' }}>
              {/*<Typography style={{color: 'red'}} variant="caption">*/}
              <Typography style={{ color: 'var( --color-danger-300 )' }} variant="caption">
                {error}
              </Typography>
            </div>
          )}
        </Form.Field>
      </Form.Root>
    )
  }
)
