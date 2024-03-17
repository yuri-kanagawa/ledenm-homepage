import IndexPage from 'src/components/pages/index/IndexPage'

export default function Page({
                               params
                             }: {
  params: {
    locale: string
  }
}) {
  const locale = params.locale
  return <IndexPage locale={locale} />
}
