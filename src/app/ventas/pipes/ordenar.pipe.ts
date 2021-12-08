import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes:Heroes[], orderBy:string):Heroes[] {
    if (orderBy === 'sin valor') {
      return heroes;
    }
    else if (orderBy === 'nombre') {
      const heroe = heroes.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
      return heroe;
    } else if (orderBy === 'vuela') {
      const heroe = heroes.sort((a, b) => (a.vuela > b.vuela ? -1 : 1));
      return heroe;
    } else if (orderBy === 'color') {
      const heroe = heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
      return heroe;
    } else {
      return heroes;
    };

  };

}
