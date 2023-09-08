import { Component } from '@angular/core';
import { ComponentBaseComponent } from '../component-base/component-base.component';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent extends ComponentBaseComponent {
  constructor() {
    super();
    this.name = 'ComponentA';
  }

}
