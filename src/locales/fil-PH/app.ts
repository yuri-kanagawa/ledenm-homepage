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
    explain: 'QRunir ay isang app na maaaring magbasa, lumikha, at mag-edit ng QR codes',
    url: App.qrunir.url
  },
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin ay pandarayang barya mula sa ledenm',
    url: App.cCoin.url
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice ay pandarayang dice mula sa ledenm',
    url: App.cDice.url
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette ay pandarayang roleta mula sa ledenm',
    url: App.cRoulette.url
  }
}

export type AppsValueType = ExactType<AppsType, typeof apps>


