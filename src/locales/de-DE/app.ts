import { AppsValueType } from '../en-US'
import { App } from 'src/constants/app'

const getUrl = (url: string): string => `${url}/de-DE`

export const apps: AppsValueType = {
  qrunir: {
    name: App.qrunir.name,
    explain: 'QRunir ist eine App, die QR-Codes lesen, generieren und bearbeiten kann',
    url: getUrl(App.qrunir.url)
  },
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin ist Cheat Coin',
    url: getUrl(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice ist Cheat Dice',
    url: getUrl(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette ist Cheat Roulette',
    url: getUrl(App.cRoulette.url)
  }
}
