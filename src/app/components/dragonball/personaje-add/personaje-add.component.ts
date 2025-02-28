import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Personaje } from '../../../interfaces/personajes.interface';

@Component({
  selector: 'dragonball-personaje-add',

  templateUrl: './personaje-add.component.html',

})
export class PersonajeAddComponent {
  name = signal('');
  power = signal(0);

  nuevoPersonaje = output<Personaje>();

  AgregarPersonaje() {
    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }
    const personaje: Personaje = {
      id : Math.floor(Math.random() + 1000),
      name: this.name(),
      power : this.power()

    }
    this.nuevoPersonaje.emit(personaje);
    this.resetearCampos();
    }

    resetearCampos(){
      this.name.set('')
      this.power.set(0)
    }
}
