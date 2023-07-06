import { z } from 'zod'

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email('Invalid Email Address!').nonempty('Enter Email!'),
})
