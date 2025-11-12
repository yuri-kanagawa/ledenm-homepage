import { AppsValueType } from '../en-US'
import { App } from 'src/constants/app'

const getUrl = (url: string): string => `${url}/id-ID`

export const apps: AppsValueType = {
  cCoin: {
    name: App.cCoin.name,
    explain: 'सी-कॉइन चीट कॉइन है',
    url: getUrl(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'सी-डाइस एक दिन का है',
    url: getUrl(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'सी-रूलेट चीट रूलेट है',
    url: getUrl(App.cRoulette.url)
  }
}
