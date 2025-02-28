import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { Personaje } from '../../../interfaces/personajes.interface';

@Component({
  selector: 'dragonball-personaje-list',
  templateUrl: './personaje-list.component.html',
})
export class PersonajeListComponent {
  personajes = input.required<Personaje[]>()
  listName = input.required<string>()
}
