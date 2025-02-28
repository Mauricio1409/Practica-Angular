import { effect, Injectable, signal } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { JsonPipe } from '@angular/common';

const CargarEnLocalStorage = () : Personaje[] => {
  const personajes = localStorage.getItem("personajes")
  return personajes ? JSON.parse(personajes) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballServices {


    personajes = signal<Personaje[]>(CargarEnLocalStorage());

    guardarEnLocalStorage = effect(() => {
      localStorage.setItem("Personajes", JSON.stringify(this.personajes()))
    })

    agregarPersonaje(nuevoPersonaje : Personaje){
      this.personajes.update((list) => [...list, nuevoPersonaje]);
  }


}
