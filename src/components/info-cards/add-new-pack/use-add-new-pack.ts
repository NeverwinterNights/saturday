import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const addEditPackSchema = z.object({
  name: z
    .string({
      required_error: 'Enter Name!',
    })
    .trim()
    .nonempty('Enter Name!'),
  private: z.boolean().optional(),
})
export type AddPackFormType = z.infer<typeof addEditPackSchema>

export const useAddEditPack = (name?: string) => {
  return useForm<AddPackFormType>({
    resolver: zodResolver(addEditPackSchema),
    mode: 'onSubmit',
    defaultValues: {
      name,
    },
  })
}
