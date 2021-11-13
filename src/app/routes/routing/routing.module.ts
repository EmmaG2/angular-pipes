import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsComponent } from 'src/app/ventas/pages/basics/basics.component';
import { NumbersComponent } from '../../ventas/pages/numbers/numbers.component';
import { NoCommonsComponent } from '../../ventas/pages/no-commons/no-commons.component';
import { OrderComponent } from '../../ventas/pages/order/order.component';

const routes:Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'no-commons',
    component: NoCommonsComponent
  },
  {
    path: 'basics',
    component: BasicsComponent  
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ) //forRoote es importante para definir nuestras rutas
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
