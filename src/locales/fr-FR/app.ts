import { AppsValueType } from '../en-US'
import { App } from 'src/constants/app'

const getUrl = (url: string): string => `${url}/fr-FR`
export const apps: AppsValueType = {
  qrunir: {
    name: App.qrunir.name,
    explain: 'QRunir est une application qui peut lire, générer et modifier des codes QR',
    url: getUrl(App.qrunir.url)
  },
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin est une pièce de triche',
    url: getUrl(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice est un dé de triche',
    url: getUrl(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette est une roulette de triche',
    url: getUrl(App.cRoulette.url)
  }
}
