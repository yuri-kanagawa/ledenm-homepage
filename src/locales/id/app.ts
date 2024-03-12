import { AppsValueType } from '../en'
import { App } from 'src/constants/app'

const get_url = (url: string): string => `${url}/id`

export const apps: AppsValueType = {
  cCoin: {
    name: App.cCoin.name,
    explain: 'सी-कॉइन चीट कॉइन है',
    url: get_url(App.cCoin.url)
  },
  cDice: {
    name: App.cDice.name,
    explain: 'सी-डाइस एक दिन का है',
    url: get_url(App.cDice.url)
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'सी-रूलेट चीट रूलेट है',
    url: get_url(App.cRoulette.url)
  }
}
