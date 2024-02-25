import { App } from 'src/locales/common'
import { LocalType } from 'src/hooks/useLocal'
type AppType = {
  name: string
  explain: string
}
export const getAppList = (t: LocalType['t']): AppType[] => [
  { name: App.cCoin, explain: t.cCoinExplain },
  { name: App.cDice, explain: t.cDiceExplain },
  { name: App.cRoulette, explain: t.cRouletteExplain }
]
