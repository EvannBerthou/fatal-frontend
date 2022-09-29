import {Question} from "./QUESTION";

export interface Categorie{
  id : number;
  qcm_id: number;
  texte: string;
  created_at: string;
  updated_at: string;
  questions: Question[];
}