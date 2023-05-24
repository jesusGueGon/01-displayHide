import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent {

  public element: boolean = false;

  constructor() {}

  mostrarImagen(): boolean {

    if(this.element === true)
    {
      return this.element = false;
    }

    return this.element = true;





  }

}
