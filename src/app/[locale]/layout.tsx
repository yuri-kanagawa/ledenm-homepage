import { getIsEnglish, getIsExistLanguage, getLocalFile } from 'src/utils/locales/'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'


type Props = {
  params: {
    locale: string
  }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const locale = params.locale

  const t = getLocalFile(locale)

  return t.meta
}

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
