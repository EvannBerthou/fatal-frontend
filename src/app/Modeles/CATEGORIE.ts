import {Question} from "./QUESTION";

export interface ICategorie{
  id : number;
  qcm_id: number;
  texte: string;
  created_at: string;
  updated_at: string;
  questions: Question[];
}
export class Categorie implements ICategorie {
  id : number;
  qcm_id: number;
  texte: string;
  created_at: string;
  updated_at: string;
  questions: Question[];
  constructor(id: number, qcm_id: number, texte: string, created_at: string, updated_at: string, questions: Question[]) {
    this.id = id;
    this.qcm_id = qcm_id;
    this.texte = texte;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.questions = questions;
  }
}
