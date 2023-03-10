import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-livro',
  templateUrl: './formulario-livro.component.html',
  styleUrls: ['./formulario-livro.component.scss']
})
export class FormularioLivroComponent implements OnInit {

  id: number | null;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id") as number | null;
   }

  ngOnInit(): void {
  }

}
