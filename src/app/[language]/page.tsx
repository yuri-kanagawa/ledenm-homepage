'use client'
import IndexPage from 'src/components/pages/index/IndexPage'
import { Language } from 'src/domains/valueObjects/language/Language'

export default function Page({
  params
}: {
  params: {
    language: (typeof Language.LANGUAGE_LIST)[number]
  }
}) {
  return <IndexPage languageCode={params.language} />
}
