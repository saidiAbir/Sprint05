import { Component, OnInit } from '@angular/core';
import { Bijoux } from '../model/bijoux.model';
import { BijouxService } from '../services/bijoux.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-bijoux',
  templateUrl: './bijoux.component.html',
  styleUrl: './bijoux.component.css'
})
export class BijouxComponent implements OnInit {
  bijoux!: Bijoux[];

  constructor(private bijouxService: BijouxService, public authService: AuthService) {
  }
  ngOnInit(): void {
    this.chargerBijoux();

  }
  chargerBijoux() {
    this.bijouxService.listeBijoux().subscribe(bijx => {
      console.log(bijx);
      this.bijoux = bijx;
    });
  }
  suppBijoux(bijx: Bijoux) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.bijouxService.suppBijoux(bijx.idBijoux).subscribe(() => {
        console.log("bijoux supprimé");
        this.chargerBijoux();
      });
  }

}
