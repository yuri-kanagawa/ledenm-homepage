import { AppsValueType } from '../en'
import { App } from 'src/constants/app'

const get_url = (url: string): string => `${url}/ru`

export const apps: AppsValueType = {
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin — это чит-монета',
    url: get_url(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice — это чит-кости',
    url: get_url(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette — это чит-рулетка',
    url: get_url(App.cRoulette.url)
  }
}
