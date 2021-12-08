import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../primeNgModules/primeNgModules.module';

import { BasicsComponent } from './pages/basics/basics.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { OrderComponent } from './pages/order/order.component';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [
    BasicsComponent,
    MayusculasPipe,
    NoCommonsComponent,
    NumbersComponent,
    OrderComponent,
    VuelaPipe,
    OrdenarPipe

  ],
  exports: [
    BasicsComponent,
    MayusculasPipe,
    NoCommonsComponent,
    NumbersComponent,
    OrderComponent,
    VuelaPipe,
  ],
})

export class VentasModule {}
