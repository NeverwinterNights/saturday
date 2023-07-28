import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const addEditCardSchema = z.object({
  question: z
    .string({
      required_error: 'Enter Question!',
    })
    .trim()
    .min(3)
    .nonempty('Enter Question!'),
  answer: z
    .string({
      required_error: 'Enter Answer!',
    })
    .min(3)
    .trim()
    .nonempty('Enter Answer!'),
  questionImg: z.instanceof(FileList).optional(),
  // questionImg: z.any().optional(),
  answerImg: z.instanceof(FileList).optional(),
  questionVideo: z.instanceof(FileList).optional(),
  answerVideo: z.instanceof(FileList).optional(),
})

export type FormType = z.infer<typeof addEditCardSchema>

export const useAddEditCard = (
  question?: string,
  answer?: string,
  // questionImg?: FileList | undefined,
  // answerImg?: FileList | undefined,
  questionVideo?: FileList | undefined,
  answerVideo?: FileList | undefined
) => {
  return useForm<FormType>({
    resolver: zodResolver(addEditCardSchema),
    mode: 'onSubmit',
    defaultValues: {
      question,
      answer,
      // questionImg,
      // answerImg,
      questionVideo,
      answerVideo,
    },
  })
}
