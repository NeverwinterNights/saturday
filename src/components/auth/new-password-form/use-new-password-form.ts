import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter Password')
    .min(8, 'Password must be at least 8 characters'),
})
type FormType = z.infer<typeof NewPasswordSchema>

export const useNewPassword = () => {
  return useForm<FormType>({
    resolver: zodResolver(NewPasswordSchema),
    mode: 'onSubmit',
  })
}
