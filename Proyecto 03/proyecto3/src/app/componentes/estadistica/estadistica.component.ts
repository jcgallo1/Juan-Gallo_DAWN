import { Component } from '@angular/core';
import { Data, Stats, RootObject } from '../../interfaz/icampeon';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent {
  data!: Data[];

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      let id = params['id']; 

      let campeon = JSON.parse(localStorage.getItem("campeones")!);
          
      if(campeon) {
        
        const campeones=Object.values(campeon.data);
        const array:any= campeones[id];
        const a= Object.values(array);
        this.data=array;
        console.log(this.data)
        //console.log(cameponfilterer)
       
      

      }
      
  });
  
  }
 
}
