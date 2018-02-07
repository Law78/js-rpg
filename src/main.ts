import {Door} from './world/targettable/index';
import {Chierico, Guerriero, Mago} from './world/targettable/playable/index';
import * as Tipologie from './world/enumerazioni';
import {Buff} from './world/effetti/buff';
import {Arma} from './world/armi/arma';
import {Magia} from './world/magia/magia';

let d = new Door(100);
let m = new Mago('Merlino', Tipologie.Razza.Umanoide, {
  str: 10,
  dex: 20,
  int: 50
}, 12);
let g = new Guerriero('Conan', Tipologie.Razza.Draconiano, {
  str:40,
  dex:12,
  int: 2
}, 20);
let c = new Chierico('Cleric', Tipologie.Razza.Umanoide, {
  str: 20,
  dex: 15,
  int: 8
}, 18);

let p = new Buff({
  effetto: Tipologie.Effetto.Protezione,
  causa: {
    tipologia: Tipologie.Elemento.acqua,
    valore: 3
  }
}, 1800);
//c.setBuff(p);

let spada = new Arma('Spadone a 2 Mani', 3, Tipologie.Materiale.Ferrite);
let fireball = new Magia('Fireball', 10, Tipologie.Elemento.fuoco);
let paragrafo = document.querySelector('p');

setTimeout(function(){
  let valore = m.attack(c, fireball);
  if(paragrafo){
    paragrafo.innerText = `Hai colpito per ${valore} danni!`;
  }
},1000);
setTimeout(function(){
  let valore = m.attack(c, fireball);
  if(paragrafo){
    paragrafo.innerText = `Hai colpito per ${valore} danni!`;
  }
},2000);

setTimeout(function(){
  let valore = m.attack(c, fireball);
  if(paragrafo){
    paragrafo.innerText = `Hai colpito per ${valore} danni!`;
  }
},4000);


if(paragrafo){
  paragrafo.innerText = 'Ciao';
}




const getJSON = <T>(config: { url: string }): Promise<T> => {
  const fetchConfig = ({ method: 'GET' });
  return fetch(config.url, fetchConfig)
    .then<T>(response => response.json());
}

type LoadUsersResponse = {
users: user
[key: number] : user
}

type user = {
  id: number;
  name: string;
};

function loadUsers() {
return getJSON<LoadUsersResponse>({ url: 'https://jsonplaceholder.typicode.com/users' });
}

const url = 'https://jsonplaceholder.typicode.com/users';
getJSON<LoadUsersResponse>({ url })
.then((res: LoadUsersResponse) => {
  console.log(res[0].name) // <== no error ???
})

