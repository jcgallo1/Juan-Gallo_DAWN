import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json')
  }
}
