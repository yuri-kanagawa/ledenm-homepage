import IndexPage from 'src/components/pages/index/IndexPage'
import { Language } from 'src/domains/valueObjects/language'
export default function Page() {
  return <IndexPage languageCode={Language.EN} />
}
