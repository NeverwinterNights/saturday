import { z } from 'zod'

export const registerSchema = z
  .object({
    email: z.string().trim().nonempty('Enter email').email('Invalid email address'),
    password: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(8, 'Password must be at least 8 characters'),
    confirm: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(8, 'Password must be at least 8 characters'),
  })
  .refine(data => data.password === data.confirm, {
    message: 'The passwords did not match',
    path: ['confirm'],
  })
