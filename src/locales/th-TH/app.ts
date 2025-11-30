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
    explain: 'QRunir คือแอปที่สามารถอ่าน สร้าง และแก้ไข QR code ได้',
    url: App.qrunir.url
  },
  cCoin: {
    name: App.cCoin.name,
    explain: 'C-Coin คือเหรียญโกงของ ledenm',
    url: App.cCoin.url
  },
  cDice: {
    name: App.cDice.name,
    explain: 'C-Dice คือเกมทอยลูกเต๋าแบบโกง',
    url: App.cDice.url
  },
  cRoulette: {
    name: App.cRoulette.name,
    explain: 'C-Roulette คือรูเล็ตที่โกงได้ของ ledenm',
    url: App.cRoulette.url
  }
}

export type AppsValueType = ExactType<AppsType, typeof apps>



