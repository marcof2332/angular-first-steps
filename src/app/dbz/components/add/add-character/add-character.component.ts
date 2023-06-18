import { Character } from './../../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //Creo el evento para que cuando se presione el boton submit se
  //se pueda emitir el objeto Character.
  @Output() //Para que la main page pueda escuchar este evento
            //hay que agregar el @Output
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {

    //debugger; //punto de interrupcion.

    console.log(this.character);

    if( this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0}
  }

}
