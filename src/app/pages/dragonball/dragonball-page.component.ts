import { Component, signal } from "@angular/core";

// ✅ La interfaz debe estar fuera de la clase
interface Personaje {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: "app-dragonball-page", // ✅ Agregué selector
  templateUrl: "./dragonball-page.component.html"
})
export class DragonballPageComponent {
  name = signal("");
  power = signal(0);

  personajes = signal<Personaje[]>([
    // { id: 2, name: "Vegeta", power: 90 },
    // { id: 3, name: "Gohan", power: 80 },
    { id: 1, name: "Goku", power: 100 },
    // { id: 4, name: "Yamcha", power: 50 } // ✅ Cambié el id de 1 a 4
  ]);

  AgregarPersonaje() {
    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }
    const personaje: Personaje = {
      id : this.personajes.length +1,
      name: this.name(),
      power : this.power()

    }
    this.personajes.update(
      list => [...list, personaje]
    )
    this.resetearCampos();
    }

    resetearCampos(){
      this.name.set('')
      this.power.set(0)
    }


}
