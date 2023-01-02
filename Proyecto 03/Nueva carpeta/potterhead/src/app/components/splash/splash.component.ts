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
      
      console.log(response)

    })
  }

}
