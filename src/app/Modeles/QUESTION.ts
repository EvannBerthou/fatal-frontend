import { Reponse } from "./REPONSE";

export interface Question {
  id: number;
  texte: string;
  created_at: string;
  updated_at: string;
  typedequestion: string;
  reponses: Reponse[];
}
