import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routes/routing/routing.module';
import { SharedModule } from './ventas/shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';


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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
