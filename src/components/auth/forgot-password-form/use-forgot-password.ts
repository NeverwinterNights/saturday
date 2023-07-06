import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email('Invalid Email Address!').nonempty('Enter Email!'),
})
type FormType = z.infer<typeof forgotPasswordSchema>

export const useForgotPassword = () => {
  return useForm<FormType>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onSubmit',
  })
}
