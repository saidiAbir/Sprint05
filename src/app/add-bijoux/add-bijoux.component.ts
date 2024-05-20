import { Component, OnInit } from '@angular/core';
import { Bijoux } from '../model/bijoux.model';
import { BijouxService } from '../services/bijoux.service';
import { Marque } from '../model/marque.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-bijoux',
  templateUrl: './add-bijoux.component.html',
  styleUrl: './add-bijoux.component.css'
})
export class AddBijouxComponent implements OnInit {
  newBijoux = new Bijoux();

  message: string | undefined;
  marques!: Marque[];
  newMarque!: Marque;
  newIdMar!: number;


  constructor(private bijouxService: BijouxService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    //this.marques = this.bijouxService.listeMarques(); 
    this.bijouxService.listeMarques().
      subscribe(mar => {
        console.log(mar);
        if (Array.isArray(mar)) {
          this.marques = mar;
        }
      });


  }
  addBijoux() {
    this.newBijoux.marque = this.marques.find(mar => mar.idMar == this.newIdMar)!;
    this.bijouxService.ajouterBijoux(this.newBijoux)
      .subscribe(bijx => {
        console.log(bijx);
        this.router.navigate(['bijoux']);
      });

  }
}