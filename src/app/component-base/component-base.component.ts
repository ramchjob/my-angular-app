import { Component } from '@angular/core';

@Component({
  selector: 'app-component-base',
  templateUrl: './component-base.component.html',
  styleUrls: ['./component-base.component.css']
})
export class ComponentBaseComponent {
name: string  = '';
constructor() {
  
}
}
