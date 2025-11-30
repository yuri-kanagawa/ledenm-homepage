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
    explain: 'QRunir היא אפליקציה שיכולה לקרוא, ליצור ולערוך קודי QR',
    url: App.qrunir.url
  },
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin הוא מטבע רמאות של ledenm',
    url: App.cCoin.url
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice הוא משחק קוביות מרמה של ledenm',
    url: App.cDice.url
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette היא רולטת רמאות של ledenm',
    url: App.cRoulette.url
  }
}

export type AppsValueType = ExactType<AppsType, typeof apps>


