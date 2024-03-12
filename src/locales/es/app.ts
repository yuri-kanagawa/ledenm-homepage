import { AppsValueType } from '../en'
import { App } from 'src/constants/app'

const get_url = (url: string): string => `${url}/es`

export const apps: AppsValueType = {
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin es una moneda trampa',
    url: get_url(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Roulette es una regla de trampas',
    url: get_url(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette es una ruleta de trampas',
    url: get_url(App.cRoulette.url)
  }
}
