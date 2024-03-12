import { App } from 'src/constants/app'
import { AppsValueType } from 'src/locales/en'

const get_url = (url: string): string => `${url}/zh`

export const apps: AppsValueType = {
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin是作弊币',
    url: get_url(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice 是作弊骰子',
    url: get_url(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C 轮盘 — это чит-рулетка',
    url: get_url(App.cRoulette.url)
  }
}
