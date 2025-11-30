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
    explain: 'QRunir is een app die QR-codes kan lezen, genereren en bewerken',
    url: App.qrunir.url
  },
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin is een cheat-munt van ledenm',
    url: App.cCoin.url
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice is een cheat-dobbelspel van ledenm',
    url: App.cDice.url
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette is een cheat-roulette van ledenm',
    url: App.cRoulette.url
  }
}

export type AppsValueType = ExactType<AppsType, typeof apps>


