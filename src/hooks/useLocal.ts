import { langState } from 'src/stores/lang/langContext'
import { useRecoilState } from 'recoil'
import { get_local_file } from 'src/utils/locales'

export const useLocale = () => {
  const [lang] = useRecoilState(langState)
  const t = get_local_file(lang)
  return { lang, t }
}

export type LocalType = ReturnType<typeof useLocale>
