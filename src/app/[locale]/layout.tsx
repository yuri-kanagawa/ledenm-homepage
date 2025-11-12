import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import { Locale } from 'src/domains'

type Params = {
  locale: string
}

export async function generateStaticParams(): Promise<Params[]> {
  return Locale.generatePages()
}

type Props = {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = Locale.create(params.locale)
  return locale.definition.meta
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
  const locale = Locale.create(params.locale)

  if (locale.isEnglish()) return redirect('/')
  if (!Locale.isValidCode(locale.toString())) return redirect('/')
  return <>{children}</>
}
