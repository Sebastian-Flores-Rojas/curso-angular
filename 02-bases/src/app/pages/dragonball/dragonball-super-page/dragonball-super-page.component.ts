import { NgClass, NgFor } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CharacterListComponent } from "../../../components/dragonball/character-list/character-list.component";
import { DragonballCharacterAddComponent } from "../../../components/dragonball/dragonball-character-add/dragonball-character-add.component";

import { Character } from "../../../interfaces/character.interface";
import { DragonballSerice } from '../../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [RouterLink, RouterLinkActive, NgFor, NgClass, CharacterListComponent, DragonballCharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})

export class DragonballSuperPageComponent {

  public dragronballService = inject(DragonballSerice);


}
