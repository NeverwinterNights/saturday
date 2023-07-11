import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const addEditCardSchema = z.object({
  question: z
    .string({
      required_error: 'Enter Question!',
    })
    .trim()
    .nonempty('Enter Question!'),
  answer: z
    .string({
      required_error: 'Enter Answer!',
    })
    .trim()
    .nonempty('Enter Answer!'),
})
export type FormType = z.infer<typeof addEditCardSchema>

export const useAddEditCard = (question?: string, answer?: string) => {
  return useForm<FormType>({
    resolver: zodResolver(addEditCardSchema),
    mode: 'onSubmit',
    defaultValues: {
      question,
      answer,
    },
  })
}
