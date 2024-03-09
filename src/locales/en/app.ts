import { ExactType } from 'src/types';
import {App} from '../common'

export type AppType= {
  name: string;
  explain: string;
}
type AppsType = {[key: string]: AppType }
export const apps: AppsType = {
  cCoin: {
    name: App.cCoin,
    explain: 'C-Coin is Cheat Coin'
  },
  cDice: {
    name: App.cDice,
    explain: 'C-Dice is Cheat Dice'
  },
  cRoulette: {
    name: App.cRoulette,
    explain: 'C-Roulette is Cheat Roulette'
  }
};

export type AppsValueType = ExactType<AppsType,typeof apps>
