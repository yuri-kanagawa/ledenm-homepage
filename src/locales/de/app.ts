import { AppsValueType } from '../en'
import { App } from 'src/constants/app'


const get_url = (url: string): string => `${url}/de`

export const apps: AppsValueType = {
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin ist Cheat Coin',
    url: get_url(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice ist Cheat Dice',
    url: get_url(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette ist Cheat Roulette',
    url: get_url(App.cRoulette.url)
  }
}
