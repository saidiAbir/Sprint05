import { Injectable } from '@angular/core';
import { Bijoux } from '../model/bijoux.model';
import { Marque } from '../model/marque.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarqueWrapper } from '../model/MarqueWrapped.model';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class BijouxService {
  apiURL: string = 'http://localhost:8091/bijoux/api';
  apiURLMar: string = 'http://localhost:8091/bijoux/api/mar';



  Bijoux: Bijoux[]; //un tableau de Bijoux 
  bijoux!: Bijoux;
  marques: Marque[]; //un tableau de Marques
  constructor(private http: HttpClient, private authService: AuthService) {
    // this.marques = [ {idMar : 1, nomMar : "Pandora"}, 
    // {idMar : 2, nomMar : "Bulgari"}];  
    /*this.Bijoux = [
      { idBijoux: 1, nomBijoux: "Bracelet", prix: 3000.600, dateCreation: new Date("01/14/2011"), marque : {idMar : 1, nomMar : "Pandora"} },
      { idBijoux: 2, nomBijoux: "collier", prix: 450, dateCreation: new Date("12/17/2010"), marque : {idMar : 2, nomMar : "Bulgari"} },
      { idBijoux: 3, nomBijoux: "Bague", prix: 900.123, dateCreation: new Date("02/20/2020"), marque : {idMar : 1, nomMar : "Pandora"} }
    ];*/
    this.Bijoux = [];
    this.marques = [];
  }
  /* listeBijoux(): Bijoux[] {
     return this.Bijoux;
   }*/
  /* listeBijoux(): Observable<Bijoux[]> {
     return this.http.get<Bijoux[]>(this.apiURL);
   }*/
   listeBijoux(): Observable<Bijoux[]> {
     let jwt = this.authService.getToken();
     jwt = "Bearer " + jwt;
     let httpHeaders = new HttpHeaders({ "Authorization": jwt })
     return this.http.get<Bijoux[]>(this.apiURL + "/all", { headers: httpHeaders });
   }
 /* listeBijoux(): Observable<Bijoux[]> {
    return this.http.get<Bijoux[]>(this.apiURL + "/all");
  }*/

  ajouterBijoux(bijx: Bijoux): Observable<Bijoux> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.post<Bijoux>(this.apiURL + "/addbijx", bijx, { headers: httpHeaders });
  }
  suppBijoux(id: number) {
    const url = `${this.apiURL}/delbijx/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.delete(url, { headers: httpHeaders });

  }
  consulterBijoux(id: number): Observable<Bijoux> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<Bijoux>(url, { headers: httpHeaders });
  }

  updateBijoux(bijx: Bijoux): Observable<Bijoux> {
    // console.log(p); 
    // this.suppBijoux(bijx);
    //this.ajouterBijoux(bijx);
    //this.trierBijoux();
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.put<Bijoux>(this.apiURL + "/updatebijx", bijx, { headers: httpHeaders });


  }
  trierBijoux() {
    this.Bijoux = this.Bijoux.sort((n1, n2) => {
      if (n1.idBijoux! > n2.idBijoux!) {
        return 1;
      }
      if (n1.idBijoux! < n2.idBijoux!) {
        return -1;
      }
      return 0;
    });
  }

  listeMarques(): Observable<MarqueWrapper> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<MarqueWrapper>(this.apiURLMar, { headers: httpHeaders });
  }
  consulterMarque(id: number): Marque {
    return this.marques.find(mar => mar.idMar == id)!;
  }
  rechercherParMarque(idMar: number): Observable<Bijoux[]> {

    const url = `${this.apiURL}/bijxMar/${idMar}`;
    return this.http.get<Bijoux[]>(url);
  }
  rechercherParNom(nom: string): Observable<Bijoux[]> {
    const url = `${this.apiURLMar}/bijxByName/${nom}`;
    return this.http.get<Bijoux[]>(url);
  }

  ajouterMarque(mar: Marque): Observable<Marque> {
    return this.http.post<Marque>(this.apiURLMar, mar, httpOptions);
  }


}