import { ExactType } from 'src/types'
import { App } from 'src/constants/app'

export type AppType = {
  name: string
  explain: string
  url: string
}
type AppsType = {
  [key: string]: AppType
}
export const apps: AppsType = {
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin is Cheat Coin',
    url: App.cCoin.url
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice is Cheat Dice',
    url: App.cDice.url
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette is Cheat Roulette',
    url: App.cRoulette.url
  }
}

export type AppsValueType = ExactType<AppsType, typeof apps>
