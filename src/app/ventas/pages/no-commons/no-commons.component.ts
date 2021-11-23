import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html'
})
export class NoCommonsComponent {
  nombre:string = 'Fernando';
  genero:string = 'femenino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla' 
  };
  
};
