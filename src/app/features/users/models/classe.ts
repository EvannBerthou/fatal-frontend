import { User } from "src/app/core/models/USER";

export type Classe = {
  id: number
  nom: string;
  professeurs: User[];
};
