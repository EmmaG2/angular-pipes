import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit{

  items:MenuItem[] = [];

  constructor() { }

  ngOnInit():void {
      this.items = [
        {
          label: 'Pipes De Angular',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Básicos',
              icon: 'pi pi-calendar',
              routerLink: '/'
            },
            {
              label: 'Números',
              icon: 'pi pi-sort-numeric-down',
              routerLink: 'numbers'
            },
            {
              label: 'No Muy Comunes',
              icon: 'pi pi-align-left',
              routerLink: 'no-commons',
            }
          ]
        },
        {
          label: 'Pipes Personalizados',
          icon: 'pi pi-pencil',
          routerLink: 'order',

        }
      ];

  }
  

}
