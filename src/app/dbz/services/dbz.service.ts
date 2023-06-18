import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  onNewCharacter( character: Character): void {

    //se utiliza el operador spread "..." que significa que en este caso
    //le indico al constructor que tome todas las propiedades del character y esparcelas
    //por todo el objeto que estoy creando.
    const newCharacter: Character = { id:uuid(), ...character};
    this.characters.push(newCharacter);
  }
  /*onDeleteCharacter(index: number): void {
    this.characters.splice(index,1);
  }*/
  deleteCharacterById(id:string) {
    this.characters = this.characters.filter(characters => characters.id !== id) //retorna un arreglo con todos los id que sean distintos al que pase por parametro.
  }
}

