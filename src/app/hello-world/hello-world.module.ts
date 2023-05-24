import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';



@NgModule({
  declarations: [
    HolaMundoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HolaMundoComponent
  ]
})
export class HelloWorldModule { }
