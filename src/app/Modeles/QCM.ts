import {ICategorie} from "./CATEGORIE";

export interface IQCM {
  id: number;
  name: string;
  entete: string;
  isRandomized: boolean
  categories: ICategorie[];
  user: string;
}

export class QCM implements IQCM {
  categories: ICategorie[];
  entete: string;
  id: number;
  isRandomized: boolean;
  name: string;
  user: string;
  constructor(categories: ICategorie[], entete: string, id:number, isRandomized: boolean, name:string, user:string){
    this.categories = categories;
    this.entete = entete;
    this.id = id;
    this.isRandomized = isRandomized;
    this.name = name;
    this.user = user;
  }
}