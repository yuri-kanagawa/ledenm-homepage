import { LocalConstType, en } from "../en"
import { ja } from "../ja"

export const get_local_file = (language:string) : LocalConstType =>  {
  switch (language) {
    case "en":
      return en
    case 'ja':
      return ja
    default:
      return en
  }
}
