import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { EstadisticaComponent } from './componentes/estadistica/estadistica.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { HistoriaComponent } from './componentes/historia/historia.component';
const routes: Routes = [
  { path: "Buscador", component: BuscadorComponent },
  { path: "Estadistica", component: EstadisticaComponent },
  { path: "Galeria", component: GaleriaComponent },
  { path: "Historia", component: HistoriaComponent },
  { path: "**", redirectTo: "Buscador" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
