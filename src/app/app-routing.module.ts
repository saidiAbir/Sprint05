import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BijouxComponent } from './bijoux/bijoux.component';
import { AddBijouxComponent } from './add-bijoux/add-bijoux.component';
import { UpdateBijouxComponent } from './update-bijoux/update-bijoux.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProduitGuard } from './produit.guard';





const routes: Routes = [{ path: 'bijoux', component: BijouxComponent },
{ path: 'add-bijoux', component: AddBijouxComponent, canActivate: [ProduitGuard] },
{ path: 'updateBijoux/:id', component: UpdateBijouxComponent },

{ path: "", redirectTo: "bijoux", pathMatch: "full" },
{ path: 'rechercheParMarque', component: RechercheParMarqueComponent },
{ path: 'rechercheParNom', component: RechercheParNomComponent },
{ path: "listeMarques", component: ListeMarquesComponent },
{ path: 'login', component: LoginComponent },
{ path: 'app-forbidden', component: ForbiddenComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
