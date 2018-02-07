import {Buff} from '../effetti/buff';
import {Arma} from '../armi/arma';
import {Magia} from '../magia/magia';
import {Effetto} from '../enumerazioni';

export type Stats = {
  str: number;
  dex: number;
  int: number;
}

export interface ITargettable{
  hits: number
  isDead():boolean
}

export abstract class Targettable implements ITargettable{
  private _pf:number;
  private _buffs: Buff[] = [];
  constructor(public hits: number){
    this._pf = hits;
  }
  abstract toString(): string;
  get Hits(): number{
    return this._pf;
  }
  set Hits(value: number){
    this._pf = value;
  }
  isDead(): boolean{
    return this._pf > 0 ? false : true;
  }
  setBuff(buff:Buff){
    this._buffs.push(buff);
  }
  getBuff(){
    return this._buffs;
  }
}

export abstract class Animato extends Targettable{
  private _lastAttack: number = 0;

  constructor(public hits: number){
    super(hits);
  }

  attack(target: ITargettable, arma: Arma | Magia): number{
    if(Date.now() - this._lastAttack < 1000) {

      console.log('nn posso attaccare di nuovo... mi sto riprendendo')
      return 0;
    }
    this._lastAttack = Date.now()
    let protezione: number = 0;
    if(target instanceof Targettable){
      target.getBuff().filter(b => b.buff.effetto == Effetto.Protezione)
      .map(b => {
          if(arma instanceof Magia){
             if(arma.elemento === b.buff.causa.tipologia){
               if(b.isValid()){
                console.log('ho protezione...giusta', b.buff.causa.valore);
                protezione = b.buff.causa.valore;
               }
             }

          }
        })
      target.Hits -= arma.danni>=protezione? arma.danni - protezione : 0;
    }
    return arma.danni - protezione;
  }
  abstract toString(): string;

}