import {Magia} from '../../magia/magia';
import {ITargettable, Animato} from '../targettable';

export class Drago extends Animato {
  toString(){
    return 'Drago';
  }
  attack(target: ITargettable, arma: Magia): number{
    return super.attack(target, arma);
  }

}