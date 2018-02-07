import {Arma} from '../../armi/arma';
import {Razza} from '../../enumerazioni';
import {Personaggio} from './personaggio';
import {Stats, ITargettable} from '../targettable';

export class Guerriero extends Personaggio {
  constructor(public nome: string, public razza: Razza,
    public stats: Stats, readonly hits: number){
    super(nome, razza, stats, hits);
  }
  toString(){
    return this.nome;
  }
  attack(target: ITargettable, arma: Arma): number{
    return super.attack(target, arma);
  }
}