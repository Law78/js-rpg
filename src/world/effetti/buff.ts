import {IEffetto} from './effetti';

export class Buff {
  private _pulse: number;
  constructor(public buff: IEffetto, durata: number){
    this._pulse = Date.now() + durata;
    setTimeout(function(){
      console.log('buff finito!!!');
    }, durata);
  }
  isValid():boolean{
    if(this._pulse >= Date.now()) return true;
    return false;
  }
}