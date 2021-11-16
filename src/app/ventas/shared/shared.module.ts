import { NgModule } from '@angular/core';

import { PrimeNgModule } from '../../primeNgModules/primeNgModules.module';

import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    PrimeNgModule
  ]
})
export class SharedModule { }
