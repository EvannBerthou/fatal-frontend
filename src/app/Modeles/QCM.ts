import { Categorie} from "./CATEGORIE";
import { Question } from "./QUESTION";

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
