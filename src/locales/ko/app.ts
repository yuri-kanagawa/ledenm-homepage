import { AppsValueType } from '../en'
import { App } from 'src/constants/app'

const get_url = (url: string): string => `${url}/ko`

export const apps: AppsValueType = {
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin은 치트코인입니다',
    url: get_url(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice는 치트 주사위입니다.',
    url: get_url(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-룰렛은 치트 룰렛입니다',
    url: get_url(App.cRoulette.url)
  }
}
