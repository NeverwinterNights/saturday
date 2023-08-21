import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import { Typography } from '../typography'

import styles from './input.module.scss'

import { ClosedInputIcon } from '@/assets/icons/CloseInputIcon.tsx'
import { Eye } from '@/assets/icons/Eye.tsx'
import { EyeClosed } from '@/assets/icons/EyeClosed.tsx'
import { SearchIcon } from '@/assets/icons/SearchIcon.tsx'

// import { ClosedInputIcon } from '../../../assets/icons/CloseInputIcon.tsx'

export type InputPropsType = {
  label?: string
  disabled?: boolean
  inputTextClassName?: string
  type?: string
  error?: string
  onClickClearInput?: () => void
  searchInput?: boolean
  // onValueChange?: (value: string) => void
  width?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputPropsType>(
  (
    {
      className,
      error,
      inputTextClassName,
      onClickClearInput,
      searchInput,
      value = '',
      placeholder,
      disabled,
      onChange,
      type,
      width,
      label,
      ...restProps
    },
    ref
  ) => {
    const [iconVisible, setIconVisible] = useState(type)

    const classNames = {
      input: clsx(styles.inputContainer, !!error && styles.error, className),
      label: clsx(styles.inputContainer, !!error && styles.error, className),
      inpText: clsx(styles.input, inputTextClassName),
    }
    const iconClickHandler = (e: any) => {
      e.preventDefault()
      setIconVisible(() => (iconVisible === 'password' ? 'text' : 'password'))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      // onValueChange?.(e.target.value)
    }

    return (
      <div className={clsx(styles.main, disabled && styles.disabled)} style={{ width }}>
        {label && (
          <div>
            <Typography className={styles.label} variant="body2">
              {label}
            </Typography>
          </div>
        )}
        <div className={classNames.input}>
          {searchInput && (
            <span
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className={styles.icon}
            >
              <SearchIcon />
            </span>
          )}
          <input
            ref={ref}
            disabled={disabled}
            className={classNames.inpText}
            placeholder={placeholder}
            value={value}
            type={iconVisible}
            onChange={handleChange}
            style={error ? { color: 'var( --color-danger-300 )' } : {}}
            {...restProps}
          />
          {searchInput && value.toString()?.length > 0 && (
            <span className={styles.closedImp} onClick={onClickClearInput}>
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
          <div className={styles.errorContainer}>
            <div style={{ margin: '4px 0' }}>
              <Typography style={{ color: 'var( --color-danger-300 )' }} variant="caption">
                {error}
              </Typography>
            </div>
          </div>
        )}
      </div>
    )
  }
)
