import { getIsEnglish, getIsExistLanguage } from 'src/utils/locales/'
import { redirect } from 'next/navigation'

export default function Layout({
                                 children,
                                 params
                               }: {
  children: React.ReactNode
  params: {
    locale: string
  }
}) {
  const locale = params.locale

  if (getIsEnglish(locale)) return redirect('/')
  if (!getIsExistLanguage(locale)) return redirect('/')
  return <>{children}</>
}
