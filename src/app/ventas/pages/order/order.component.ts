import { Component } from '@angular/core';
import { Color, Heroes } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  verification: Boolean = false;
  orderTable: string = 'sin valor';
  heroes: Heroes[] = [
    {
      nombre: 'Emma',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Juan',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Pepe',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Luis',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Añanin',
      vuela: true,
      color: Color.verde,
    },
    {
      nombre: 'Adrian Piedra',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Zero Two',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: '2B',
      vuela: false,
      color: Color.verde,
    },
  ];

  changeVerification() {
    this.verification = !this.verification;
  };

  changeOrder(valor:string) {
    this.orderTable = valor;
  };

};
