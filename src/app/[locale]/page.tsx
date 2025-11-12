'use client'
import IndexPage from 'src/components/pages/index/IndexPage'
import { Locale } from 'src/domains'

export default function Page({
  params
}: {
  params: {
    locale: string
  }
}) {
  return <IndexPage locale={Locale.create(params.locale)} />
}
