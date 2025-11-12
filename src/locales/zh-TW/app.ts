import { App } from 'src/constants/app'
import { AppsValueType } from 'src/locales/en-US'

const getUrl = (url: string): string => `${url}/zh-TW`

export const apps: AppsValueType = {
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin 是作弊幣',
    url: getUrl(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice 是作弊骰子',
    url: getUrl(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette 是作弊輪盤',
    url: getUrl(App.cRoulette.url)
  }
}
