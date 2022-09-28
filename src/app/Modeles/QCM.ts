import { Categorie, ICategorie } from "./CATEGORIE";
import { Question } from "./QUESTION";

export interface IQCM {
  id?: number;
  entete: string;
  titre: string;
  isRandomized: boolean;
  user_id: string;
  created_at: string;
  updated_at: string;
  categories: Categorie[];
}

export class QCM implements IQCM {
  id: number | undefined;
  entete: string;
  titre: string;
  isRandomized: boolean;
  user_id: string;
  created_at: string;
  updated_at: string;
  categories: Categorie[];
  constructor(categories: ICategorie[], entete: string, isRandomized: boolean, titre: string, user_id: string, created_at: string, updated_at: string, id?: number) {
    this.id = id;
    this.entete = entete;
    this.titre = titre;
    this.isRandomized = isRandomized;
    this.user_id = user_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.categories = categories;
  }

  static createEmptyQCM(idCreateur: string): QCM {
    return new QCM([], '', false, "null", idCreateur,new Date().toString(), new Date().toString());
  }
}
