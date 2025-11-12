import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import { Language } from 'src/domains/valueObjects/language/Language'

type ParamsType = {
  locale: string
}

export async function generateStaticParams(): Promise<ParamsType[]> {
  return Language.generatePages()
}

type Props = {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const language = Language.create(params.locale)
  return language.locale.meta
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
  const language = Language.create(params.locale)

  if (language.isEnglish()) return redirect('/')
  if (!Language.isValidCode(language.toString())) return redirect('/')
  return <>{children}</>
}
