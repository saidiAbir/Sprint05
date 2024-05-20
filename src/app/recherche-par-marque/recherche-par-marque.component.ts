import { Component, OnInit } from '@angular/core';
import { Bijoux } from '../model/bijoux.model';
import { Marque } from '../model/marque.model';
import { BijouxService } from '../services/bijoux.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: ``
})
export class RechercheParMarqueComponent implements OnInit {
  constructor(private bijouxService: BijouxService) {
  }


  bijoux!: Bijoux[];
  IdMarque!: number;
  marques: Marque[] = [];

  ngOnInit(): void {
    this.bijouxService.listeMarques().subscribe(mars => {
      //test if mars is arra
      if (Array.isArray(mars)) {
        this.marques = mars;
      }
      console.log(mars);
    });
  }
  onChange() {
    this.bijouxService.rechercherParMarque(this.IdMarque).
      subscribe(bijx => { this.bijoux = bijx });
  }
}
