import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../resource.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private resourcesService: ResourcesService) {
  }

   ngOnInit() {
    this.resourcesService.getData().subscribe(response => {
      
      let potterhead = localStorage.getItem("potterhead");
      if(!potterhead) {
        localStorage.setItem("potterhead", JSON.stringify(response));
      }

    })
  }

}
