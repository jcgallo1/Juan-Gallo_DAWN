import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicios/service.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent  implements OnInit{

  constructor(private ServiceService: ServiceService) {
  }

  ngOnInit() {
    this.ServiceService.getData().subscribe(response => {
      
      let campeones = localStorage.getItem("campeones");
      if(!campeones) {
        localStorage.setItem("campeones", JSON.stringify(response));
      }

    })
  }
}
