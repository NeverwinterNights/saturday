import { z } from 'zod'

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter Password')
    .min(8, 'Password must be at least 8 characters'),
})
