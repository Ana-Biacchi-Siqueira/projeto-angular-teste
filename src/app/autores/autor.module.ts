import { ListaAutorComponent } from './lista-autor/lista-autor.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioAutorComponent } from './formulario-autor/formulario-autor.component';

@NgModule({
  declarations: [FormularioAutorComponent, ListaAutorComponent],
  imports: [CommonModule, RouterModule]
})
export class AutorModule {}
