import { AppsValueType } from '../en'
import { App } from 'src/constants/app'

const get_url = (url: string): string => `${url}/hi`

export const apps: AppsValueType = {
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin adalah Koin Curang',
    url: get_url(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice adalah Cheat Dadu',
    url: get_url(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette adalah Cheat Roulette',
    url: get_url(App.cRoulette.url)
  }
}
