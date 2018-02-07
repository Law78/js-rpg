import {Guerriero} from '../src/world/targettable/playable/guerriero';
import {Razza} from '../src/world/enumerazioni';

describe('Test object instanceof Guerriero', ()=> {
  it('should return a Guerriero', () => {
    let g = new Guerriero('Lorenzo', Razza.Umanoide,{
      str:10, dex:10, int:10
    }, 100);
    expect(g).toBeInstanceOf(Guerriero);
  });
});