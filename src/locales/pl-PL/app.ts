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
  qrunir: {
    name: App.qrunir.name,
    explain: 'QRunir to aplikacja, która może czytać, generować i edytować kody QR',
    url: App.qrunir.url
  },
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin to oszukana moneta od ledenm',
    url: App.cCoin.url
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice to oszukana gra w kości od ledenm',
    url: App.cDice.url
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette to oszukana ruletka od ledenm',
    url: App.cRoulette.url
  }
}

export type AppsValueType = ExactType<AppsType, typeof apps>


