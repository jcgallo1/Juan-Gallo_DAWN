import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicios/service.service';
import { Data } from 'src/app/interfaz/icampeon';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  constructor(private ServiceService: ServiceService) {}

  buscar(): void {
    const randomObject = getRandomObject();
    window.location.assign(`/Estadistica/${randomObject.id}`);
  }
  buscarID(): void {
    const form: any = document.getElementById('buscar');
    window.location.assign(`/Estadistica/${titleCaseWord(form.value)}`);
  }
  ngOnInit() {
    this.ServiceService.getData().subscribe((response) => {
      let campeones = localStorage.getItem('campeones');
      if (!campeones) {
        localStorage.setItem('campeones', JSON.stringify(response));
      }
    });
  }
}
function titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}
function getRandomObject(): any {
  let campeones = JSON.parse(localStorage.getItem('campeones')!);
  const array = Object.values(campeones.data);
  const randomIndex = Math.floor(Math.random() * array.length); // Obtener un índice aleatorio entre 0 y el tamaño del arreglo
  return array[randomIndex]; // Devolver el objeto en la posición aleatoria del arreglo
}
/*
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('boton-buscar');
  button?.addEventListener('click', handleClick);
});

function handleClick(this: HTMLElement) {
  const randomObject = getRandomObject();
  window.location.assign(`/Estadistica/${randomObject.id}`);
}
*/
