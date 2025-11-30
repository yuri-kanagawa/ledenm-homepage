import { AppsValueType } from '../en-US'
import { App } from 'src/constants/app'

const getUrl = (url: string): string => `${url}/pt-BR`

export const apps: AppsValueType = {
  qrunir: {
    name: App.qrunir.name,
    explain: 'QRunir é um aplicativo que pode ler, gerar e editar códigos QR',
    url: getUrl(App.qrunir.url)
  },
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin é uma moeda de trapaça',
    url: getUrl(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice é um dado de trapaça',
    url: getUrl(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette é uma roleta de trapaça',
    url: getUrl(App.cRoulette.url)
  }
}
