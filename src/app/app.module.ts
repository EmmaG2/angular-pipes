import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routes/routing/routing.module';
import { SharedModule } from './ventas/shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';

// cambiar el locale de la app
import  localeEs  from "@angular/common/locales/es-MX";
import { registerLocaleData } from '@angular/common'
registerLocaleData( localeEs )

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
