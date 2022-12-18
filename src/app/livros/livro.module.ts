import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioLivroComponent } from './formulario-livro/formulario-livro.component';
import { ListaLivroComponent } from './lista-livro/lista-livro.component';



@NgModule({
  declarations: [
    FormularioLivroComponent,
    ListaLivroComponent
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class LivroModule { }
