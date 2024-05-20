/*import { Component, OnInit } from '@angular/core';
import { Bijoux } from '../model/bijoux.model';
import { BijouxService } from '../services/bijoux.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {
  bijoux!: Bijoux[];
  nomBijoux!: string;
  allBijoux!: Bijoux[];
  searchTerm!: string;
  constructor(private bijouxService: BijouxService) {
  }
  ngOnInit(): void {
  }
  rechercherProds() {
    this.bijouxService.rechercherParNom(this.nomBijoux).
      subscribe(bijx => {
        this.bijoux = bijx;
        console.log(bijx)
      });
  }
  onKeyUp(filterText: string): void {
    this.bijoux = this.allBijoux.filter(item =>
      item.nomBijoux.toLowerCase().includes(filterText.toLowerCase()));
  }
}*/
import { Component } from '@angular/core';
import { BijouxService } from '../services/bijoux.service';
import { Bijoux } from '../model/bijoux.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent {

  //nomSerie! : string;
  nomBijoux!: string;

  bijoux!: Bijoux[];
  searchTerm!: string;
 // allSeries!: Serie[];
  allBijoux!: Bijoux[];


  constructor(private bijouxService: BijouxService) { }

  rechercherSeries(){
    this.bijouxService.rechercherParNom(this.nomBijoux).
    subscribe(bijx => {
    this.bijoux = bijx;
    console.log(bijx)});
  }
  ngOnInit(): void {
    this.bijouxService.listeBijoux().subscribe(bijx => {
    console.log(bijx);
    this.bijoux = bijx;
    });
    }
    onKeyUp(filterText : string){
    this.bijoux = this.allBijoux.filter(item =>
    item.nomBijoux.toLowerCase().includes(filterText));
    }
    
}
