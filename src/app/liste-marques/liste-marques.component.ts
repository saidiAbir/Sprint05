import { Component, EventEmitter, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { BijouxService } from '../services/bijoux.service';

@Component({
  selector: 'app-liste-marques',
  templateUrl: './liste-marques.component.html',
  styles: ``
})
export class ListeMarquesComponent implements OnInit {
  marques!: Marque[];
  updatedMar: Marque = { "idMar": 0, "nomMar": "" };
  ajout: boolean = true;

  constructor(private bijouxService: BijouxService) { }
  ngOnInit(): void {

    //this.bijouxService.listeMarques().
    // subscribe(mars => {
    //  if (Array.isArray(mars)) {
    //   this.marques = mars;
    //  }
    //console.log(mars); });
    this.chargerMarques();

  }

  marqueUpdated(mar: Marque) {
    console.log("Mar updated event", mar);
    this.bijouxService.ajouterMarque(mar).
      subscribe(() => this.chargerMarques());

  }
  chargerMarques() {
    this.bijouxService.listeMarques().
      subscribe(mars => {
        if (Array.isArray(mars)) {
          this.marques = mars;
        }
        console.log(mars);
      });


  }
  updateMar(mar: Marque) {
    this.updatedMar = mar;
    this.ajout = false;


  }

}