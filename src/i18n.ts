import {
  I18N,
  createPluralize,
  useTranslate as useTranslateBase,
  useI18N as useI18NBase,
} from '@ayub-begimkulov/i18n'

import en from '../locale/en.json'
import ru from '../locale/ru.json'

const pluralizeEn = createPluralize('en')
const pluralizeRu = createPluralize('ru')

export const i18n = new I18N({
  defaultLang: 'ru',
  languages: {
    en: {
      keyset: en,
      pluralize: pluralizeEn,
    },
    ru: {
      keyset: ru,
      pluralize: pluralizeRu,
    },
  },
})

export const useTranslate = useTranslateBase<typeof i18n>
export const useI18n = useI18NBase<typeof i18n>
