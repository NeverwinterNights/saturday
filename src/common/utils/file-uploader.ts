import { toast } from 'react-toastify'

import { convertFileToBase64 } from '@/common/utils/convert-file-to-base-64.ts'

export const uploadHandler = (e: File, callBack: (value: string) => void) => {
  const file = e
  let result = ''

  if (file.size < 4000000) {
    convertFileToBase64(file, callBack)
  } else {
    toast('Error with adding photo')
  }
  console.log('result', result)

  return result
}
