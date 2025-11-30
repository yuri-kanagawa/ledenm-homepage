import { AppsValueType } from '../en-US'
import { App } from 'src/constants/app'

const getUrl = (url: string): string => `${url}/ko-KR`

export const apps: AppsValueType = {
  qrunir: {
    name: App.qrunir.name,
    explain: 'QRunir은 QR 코드를 읽고, 생성하고, 편집할 수 있는 앱입니다',
    url: getUrl(App.qrunir.url)
  },
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin은 치트코인입니다',
    url: getUrl(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice는 치트 주사위입니다.',
    url: getUrl(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-룰렛은 치트 룰렛입니다',
    url: getUrl(App.cRoulette.url)
  }
}
