import {Razza} from '../../enumerazioni';
import {ITargettable, Animato, Stats} from '../targettable';

export interface IPersonaggio{
  nome: string,
  razza: Razza,
  stats: Stats
}

export abstract class Personaggio extends Animato implements IPersonaggio{
  constructor(public nome: string, public razza: Razza,
    public stats: Stats, public hits: number){
      super(hits);
    }
}





