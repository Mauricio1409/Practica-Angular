import { Component, inject, signal } from "@angular/core";
import { PersonajeListComponent } from "../../components/dragonball/personaje-list/personaje-list.component";
import { PersonajeAddComponent } from "../../components/dragonball/personaje-add/personaje-add.component";
import { DragonballServices } from "../../services/dragonball.services";

@Component({
  selector: "dragonball-super", // ✅ Agregué selector
  templateUrl: "./dragonball-super-page.component.html",
  imports: [PersonajeListComponent, PersonajeAddComponent]
})
export class DragonballSuperPageComponent {

  public dragonBallServices = inject(DragonballServices);

}
