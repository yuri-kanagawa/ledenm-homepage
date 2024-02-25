import { ExactType } from 'src/types';
import {App} from '../common'

export type AppType= {
  name: string;
  explain: string;
}
type EnAppType = {[key: string]: AppType }
export const en_app: EnAppType = {
  cCoin: {
    name: App.cCoin,
    explain: ''
  },
  cDice: {
    name: App.cDice,
    explain: ''
  },
  cRoulette: {
    name: App.cRoulette,
    explain: ''
  }
};

export type AppsType = ExactType<EnAppType,typeof en_app>
