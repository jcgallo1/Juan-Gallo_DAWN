import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { EstadisticaComponent } from './componentes/estadistica/estadistica.component';
import { HistoriaComponent } from './componentes/historia/historia.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    EstadisticaComponent,
    HistoriaComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
