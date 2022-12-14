import { Component } from '@angular/core';
import { Data, Stats, RootObject } from '../../interfaz/icampeon';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  data!: Data[];

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      let id = params['id']; 

      let campeon = JSON.parse(localStorage.getItem("campeones")!);
          
      if(campeon) {
        console.log(id)
        const campeones=Object.values(campeon.data) as Array<Data>;
        const filtro= campeones.filter(data => data.id == id)
        this.data =filtro;
        console.log(this.data[0])
        
        
      

      }
      
  });
  
  }
}
