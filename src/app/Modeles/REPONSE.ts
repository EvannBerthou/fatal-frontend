import { IOption } from "./OPTION";

export interface IReponse {
  texte: string;
  id?: number;
  isGood: boolean;
  isRight: boolean;
}
export class Reponse implements IReponse {
  texte: string;
  id: number | undefined;
  isGood: boolean;
  isRight: boolean = false;

  constructor(texte: string, isGood: boolean, id?: number) {
    this.texte = texte;
    this.id = id;
    this.isGood = isGood;
  }
}
