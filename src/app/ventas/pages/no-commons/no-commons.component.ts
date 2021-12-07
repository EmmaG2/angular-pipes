import { Component } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
})
export class NoCommonsComponent {
  //*i18nSelect
  nombre: string = 'Emmanuel';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'tenerlo',
    femenino: 'tenerla',
  };

  //*i18nPlural
  clientes: string[] = ['k', 'hola', 'juan', 'xd', 'hola2'];

  clientesMap = {
    '=0': 'No tenemos ningún cliente en sala de espera',
    '=1': 'Tenemos 1 cliente en sala de espera',
    other: 'Tenemos # clientes en sala de espera',
  };

  cambiarPersona() {
    this.nombre = 'Diana';
    this.genero = 'femenino';
  }

  borrarPersona() {
    this.clientes.pop();
  }

  //* keyvalue pipe
  persona = {
    nombre: 'Emmanuel',
    edad: 8,
    direccion: 'Durango, Mexico',
  };

  //* async pipe
  numbers = interval(1000);
  takeFourNumbers = this.numbers.pipe(take(4));

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de la promesa' )
    }, 3500);
  } );

};
