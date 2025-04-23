import { NgClass, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [RouterLink, RouterLinkActive, NgFor, NgClass],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  name = signal('Gohan');
  power = signal(10000);


  characters = signal<Character[]>([
    {id:1, name:'Goku', power:9001},
    //{id:2, name:'Vegeta', power:8000},
    //{id:3, name:'Picoro', power:3000},
    //{id:4, name:'Yamcha', power:500}
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

    this.resetField();
  }

  resetField(){
    this.name.set('');
    this.power.set(0);
  }
}
