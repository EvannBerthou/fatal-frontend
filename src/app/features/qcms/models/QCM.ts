export interface QCM {
  id?: number;
  entete: string;
  titre: string;
  isRandomized: boolean;
  user_id: string;
  created_at: string;
  updated_at: string;
  categories: Categorie[];
}

export interface Categorie{
  id : number;
  qcm_id: number;
  texte: string;
  created_at: string;
  updated_at: string;
  questions: Question[];
}

export interface Question {
  id: number;
  texte: string;
  created_at: string;
  updated_at: string;
  typedequestion: string;
  reponses: Reponse[];
}

export interface Reponse{
  id?: number;
  question_id : number;
  texte: string;
  isRight: boolean;
  created_at: string;
  updated_at: string;
}
