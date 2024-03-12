import { AppsValueType } from '../en'
import { App } from 'src/constants/app'

const get_url = (url: string): string => `${url}/pt`

export const apps: AppsValueType = {
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin é uma moeda de trapaça',
    url: get_url(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice é um dado de trapaça',
    url: get_url(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette é uma roleta de trapaça',
    url: get_url(App.cRoulette.url)
  }
}
