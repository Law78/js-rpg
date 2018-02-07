import {Elemento, Effetto, Materiale} from '../enumerazioni';
import {Stats} from '../targettable/targettable';

type Causa = {
  valore: number;
  tipologia?: Elemento | Materiale;
  stats?: Stats;
}

export interface IEffetto{
  effetto: Effetto,
  causa: Causa
}