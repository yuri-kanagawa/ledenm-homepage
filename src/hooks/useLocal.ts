import { en } from 'src/locales/en'
import { ja } from 'src/locales/ja'
import { langState } from 'src/stores/lang/langContext'
import { useRecoilState } from 'recoil'

export const useLocale = () => {
  const [lang] = useRecoilState(langState)
  const t = lang === 'en' ? en : ja
  return { lang, t }
}

export type LocalType = ReturnType<typeof useLocale>
