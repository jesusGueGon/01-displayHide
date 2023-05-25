import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent {

  public element: boolean = false;

  constructor() {}

  mostrarImagen(): void {

    this.element = this.element? false : true;

  }

}
