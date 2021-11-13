import { NgModule } from '@angular/core';

import { PrimeNgModulesModule } from '../../primeNgModules/primeNgModules.module';

import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    PrimeNgModulesModule
  ]
})
export class SharedModule { }
