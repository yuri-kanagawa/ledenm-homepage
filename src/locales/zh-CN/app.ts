import { App } from 'src/constants/app'
import { AppsValueType } from 'src/locales/en-US'

const getUrl = (url: string): string => `${url}/zh-CN`

export const apps: AppsValueType = {
  qrunir: {
    name: App.qrunir.name,
    explain: 'QRunir 是一款可以读取、生成和编辑二维码的应用',
    url: getUrl(App.qrunir.url)
  },
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin是作弊币',
    url: getUrl(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice 是作弊骰子',
    url: getUrl(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C 轮盘 — это чит-рулетка',
    url: getUrl(App.cRoulette.url)
  }
}
