import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioAutorComponent } from './formulario-autor/formulario-autor.component';

@NgModule({
  declarations: [FormularioAutorComponent],
  imports: [CommonModule, RouterModule]
})
export class AutorModule {}
