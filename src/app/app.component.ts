import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:string = 'emmAnuEl';

  mostrarNombre():void {
    console.log(this.nombre);
    this.nombre = 'julio';
    
  }
}
