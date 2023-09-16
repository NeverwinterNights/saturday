import React, { memo, useCallback, useMemo, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { passwordRegex } from '../../consts/auth'
import {
  getEmailValidation,
  getPasswordValidation,
  getUsernameValidation,
} from '../../helpers/auth-validation'
import { AuthFooter } from '../footer/footer'
import { AuthHeader } from '../header/header'

import cls from './registration-form.module.scss'

import { useRegistrationMutation } from '@/features/auth/api/auth-api'
import { getPrivacyPolicyRoute, getTermsOfServiceRoute } from '@/shared/consts/route-paths'
import { TranslationsType, useTranslation } from '@/shared/hooks/use-translation'
import { Button } from '@/shared/ui/button'
import { ControlledCheckbox } from '@/shared/ui/controlled/controlled-checkbox'
import { ControlledInput } from '@/shared/ui/controlled/controlled-input'
import { Modal } from '@/shared/ui/modal'
import { Typography } from '@/shared/ui/typography'

export const RegistrationForm = memo(() => {
  const { t } = useTranslation()
  const [register, { isLoading, error }] = useRegistrationMutation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const registrationSchema = useMemo(() => getRegistrationSchema(t), [t])

  const {
    reset,
    formState: { errors, isValid },
    control,
    setError,
    getValues,
    handleSubmit,
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registrationSchema),
    mode: 'onBlur',
    defaultValues: { username: '', email: '', password: '', confirm: '', read: false },
  })

  const onSubmit = async (data: RegisterFormType) => {
    console.log({ username: data.username, email: data.email, password: data.password })
    try {
      await register({
        username: data.username,
        email: data.email,
        password: data.password,
      }).unwrap()
      setIsModalOpen(true)
    } catch (_) {
      console.log('value', error)
      // if (error.message === 'ggg') {
      //   setError('username', error.message)
      // }
      // if (error.message === 'dddd') {
      //   setError('email', error.message)
      // }
      // dispatch(setErrorInStorege(error.message))
      // console.log('value', error)
      // setError('email', { message: error.message })
    }
    // reset()
  }

  const handleChangeModal = useCallback(() => {
    setIsModalOpen(false)
    reset()
  }, [reset])

  // const onChange = useCallback(() => {
  //   console.log('value')
  //   clearErrors()
  // }, [clearErrors])

  return (
    <>
      <div className={cls.root}>
        <AuthHeader title={t.auth.signup} />
        <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
          <ControlledInput label={t.auth.username} control={control} name={'username'} />
          <ControlledInput label={t.auth.emailLabel} control={control} name={'email'} />
          <ControlledInput
            type={'password'}
            label={t.auth.passwordLabel}
            control={control}
            name={'password'}
          />
          <ControlledInput
            type={'password'}
            label={t.auth.passwordConfirmation}
            control={control}
            name={'confirm'}
          />
          <div className={cls.checkboxWrap}>
            <ControlledCheckbox
              errorMessage={errors.read?.message}
              control={control}
              name={'read'}
            />

            <Typography variant="small_text">
              {t.auth.iAgreeToThe}{' '}
              <Typography as="a" variant="link2" href={getTermsOfServiceRoute()}>
                {t.auth.termsOfService}
              </Typography>{' '}
              {t.auth.and}{' '}
              <Typography as="a" variant="link2" href={getPrivacyPolicyRoute()}>
                {t.auth.privacyPolicy}
              </Typography>
            </Typography>
          </div>
          <Button
            disabled={!isValid || isLoading}
            className={cls.btnSingUp}
            fullWidth
            variant="primary"
            type={'submit'}
          >
            <Typography color="inherit" variant="h3">
              {t.auth.signup}
            </Typography>
          </Button>
        </form>
        <AuthFooter />
      </div>
      <Modal isOpen={isModalOpen} title={'Email sent'} onOpenChange={handleChangeModal}>
        {getValues('email')}
        {t.auth.sentCodeToEmail(getValues('email'))}
        <Button onClick={handleChangeModal} className={cls.modalButton}>
          <Typography color="inherit" variant="h3">
            OK
          </Typography>
        </Button>
      </Modal>
    </>
  )
})

const getRegistrationSchema = (t: TranslationsType) =>
  z
    .object({
      username: getUsernameValidation(6, 20, t),
      email: getEmailValidation(t),
      password: getPasswordValidation(passwordRegex, 6, t),
      confirm: getPasswordValidation(passwordRegex, 6, t),
      read: z.boolean(),
    })
    .refine(data => data.password === data.confirm, {
      message: t?.validation.passwordsMustMatch,
      path: ['confirm'],
    })
    .superRefine((data, ctx) => {
      if (!data.read) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t?.validation.termsAnPrivacyMustBeTrue,
          path: ['read'],
        })
      }
    })

export type RegisterFormType = z.infer<ReturnType<typeof getRegistrationSchema>>
