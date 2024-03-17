import { langState } from 'src/stores/lang/langContext'
import { useRecoilState } from 'recoil'
import { getLocalFile } from 'src/utils/locales'

export const useLocale = () => {
  const [lang] = useRecoilState(langState)
  const t = getLocalFile(lang)
  return { lang, t }
}

export type LocalType = ReturnType<typeof useLocale>
