import { User } from "src/app/core/models/USER";
import { Classe } from "./classe";

export type Groupe = {
  id: number;
  nom: string;
  professeurs: User[];
  classe: Classe;
};
