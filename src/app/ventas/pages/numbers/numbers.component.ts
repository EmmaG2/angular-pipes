
import { Component } from '@angular/core';
@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [],
})
export class NumbersComponent {
  header: string = 'Ventas Netas';
  subheader: string = 'del año';
  header2: string = 'Porcentaje';
  subheader2: string = 'de ventas';

  ventasNetas: number = 2589402.585959;
  porcentaje: number = 0.4856;
}
