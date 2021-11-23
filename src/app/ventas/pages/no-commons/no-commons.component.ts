import { Component } from '@angular/core';

@Component({
  selector   : 'app-no-commons',
  templateUrl: './no-commons.component.html',
})

export class NoCommonsComponent {

  //*i18nSelect
  nombre:string = 'Emmanuel';
  genero:string = 'masculino';

  invitacionMap = {
    'masculino': 'tenerlo',
    'femenino' : 'tenerla',
  };

  //*i18nPlural
  clientes:string[] = [
    'k',
    'hola',
    'juan',
    'xd',
    'hola2'
  ];

  clientesMap = {
    '=0'   : 'No tenemos ningún cliente en sala de espera',
    '=1'   : 'Tenemos 1 cliente en sala de espera',
    'other': 'Tenemos # clientes en sala de espera',
  };

  cambiarPersona() {
    this.nombre = 'Diana';
    this.genero = 'femenino';
  };

  borrarPersona() {
    this.clientes.pop();
  };

};
