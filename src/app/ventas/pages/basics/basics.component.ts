import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent {
  nombreLower: string = 'emmanuel';
  nombreUpper: string = 'EMMANUEL';
  nombreCompleto: string = 'fErNaNdO EmMaNuEl';
}
