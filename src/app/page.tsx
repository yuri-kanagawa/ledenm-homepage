import IndexPage from 'src/components/pages/index/IndexPage'
import { Language } from 'src/domains'
export default function Page() {
  return <IndexPage language={Language.default()} />
}
