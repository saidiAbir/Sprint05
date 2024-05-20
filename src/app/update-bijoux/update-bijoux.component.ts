import { Component, OnInit } from '@angular/core';
import { Bijoux } from '../model/bijoux.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BijouxService } from '../services/bijoux.service';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-update-bijoux',
  templateUrl: './update-bijoux.component.html',
  styles: []
})
export class UpdateBijouxComponent implements OnInit {

  currentBijoux = new Bijoux();
  marques!: Marque[];
  updatedMarId!: number;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private bijouxService: BijouxService) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params.id); 
    //this.currentBijoux = this.bijouxService.consulterBijoux(this.activatedRoute.snapshot. params['id']); 
    // console.log(this.currentBijoux); 
    //  this.marques = this.bijouxService.listeMarques(); 
    //this.currentBijoux = 
    //this.bijouxService.consulterBijoux(this.activatedRoute.snapshot.params['id']);     
    //this.bijouxService.consulterBijoux(this.activatedRoute.snapshot.params['id']). 
    //subscribe( bijx =>{ this.currentBijoux = bijx; } ) ;
    this.bijouxService.listeMarques(). 
    subscribe(mars => {console.log(mars); 
                      
      if (Array.isArray(mars)){
        this.marques = mars; 
            }        } 
  ); 
    this.bijouxService.consulterBijoux(this.activatedRoute.snapshot.params['id']). 
    subscribe( prod =>{ this.currentBijoux = prod;  
      this.updatedMarId =   this.currentBijoux.marque.idMar; 
     
    } ) ;
  }
  updateBijoux() { //console.log(this.currentbijoux); 
    // this.currentBijoux.marque=this.bijouxService.consulterMarque(this.updatedMarId); 

    //this.bijouxService.updateBijoux(this.currentBijoux); 
    //this.router.navigate(['bijoux']); 
    // this.bijouxService.updateBijoux(this.currentBijoux).subscribe(bijx => { 
    // this.router.navigate(['bijoux']); }  
    //);
    this.currentBijoux.marque = this.marques.
      find(mar => mar.idMar == this.updatedMarId)!;
    this.bijouxService.updateBijoux(this.currentBijoux).subscribe(bijx => {
      this.router.navigate(['bijoux']);
    }
    );

  }
} 
