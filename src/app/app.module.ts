import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { FormGestionComponent } from './form-gestion/form-gestion.component';
import { FormRechercheComponent } from './form-recherche/form-recherche.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DestinationComponent } from './destination/destination.component';
import { InfoHotelComponent } from './info-hotel/info-hotel.component';
import { PrixComponent } from './prix/prix.component';
import { DetailDateComponent } from './detail-date/detail-date.component';
import { VilleDepartComponent } from './ville-depart/ville-depart.component';
import { NomHotelComponent } from './nom-hotel/nom-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    EtoilesComponent,
    FormGestionComponent,
    FormRechercheComponent,
    DestinationComponent,
    InfoHotelComponent,
    PrixComponent,
    DetailDateComponent,
    VilleDepartComponent,
    NomHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
