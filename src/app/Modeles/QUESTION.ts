import { IOption, Option } from "./OPTION";
import { Reponse } from "./REPONSE";
import { Options } from "./OPTIONS";

export interface IQuestion {
  id: number;
  texte: string;
  created_at: string;
  updated_at: string;
  typedequestion: string;
  reponses: Reponse[];
}
export class Question implements IQuestion {
  id: number;
  texte: string;
  created_at: string;
  updated_at: string;
  typedequestion: string;
  reponses: Reponse[];
  constructor(  id: number, texte: string, created_at: string, updated_at: string, reponses: Reponse[], typedequestion: string) {
    this.id = id;
    this.texte = texte;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.typedequestion = typedequestion;
    this.reponses = reponses;
  }
}
