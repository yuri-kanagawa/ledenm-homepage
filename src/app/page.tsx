'use client'
import IndexPage from 'src/components/pages/index/IndexPage'
import { Locale } from 'src/domains/'

export default function Page() {
  return <IndexPage locale={Locale.default()} />
}
