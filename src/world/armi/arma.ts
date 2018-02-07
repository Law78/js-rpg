import {Materiale} from '../enumerazioni';

export class Arma {
  constructor(public nome: string, public danni: number,
  materiale: Materiale){}
}