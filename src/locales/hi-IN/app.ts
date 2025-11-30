import { AppsValueType } from '../en-US'
import { App } from 'src/constants/app'

const getUrl = (url: string): string => `${url}/hi-IN`

export const apps: AppsValueType = {
  qrunir: {
    name: App.qrunir.name,
    explain: 'QRunir एक ऐप है जो QR कोड पढ़, उत्पन्न और संपादित कर सकता है',
    url: getUrl(App.qrunir.url)
  },
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin adalah Koin Curang',
    url: getUrl(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice adalah Cheat Dadu',
    url: getUrl(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette adalah Cheat Roulette',
    url: getUrl(App.cRoulette.url)
  }
}
