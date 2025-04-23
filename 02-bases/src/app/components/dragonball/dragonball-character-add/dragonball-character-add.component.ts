import { Component, output, signal } from '@angular/core';
import { Character } from "../../../interfaces/character.interface";

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html',
})
export class DragonballCharacterAddComponent {

  name = signal('');
  power = signal(0);

  newCharacter = output<Character>()

  characters = signal<Character[]>([
    {id:Math.floor(Math.random() * 1000), name:this.name(), power:this.power()}
  ]);

  addCharater(){
    console.log(this.name() +' '+ this.power());

    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length +1,
      name: this.name(),
      power: this.power()
    };

    this.characters().push(newCharacter);

    this.newCharacter.emit(newCharacter);
    this.resetField();
  }

  resetField(){
    this.name.set('');
    this.power.set(0);
  }
}
