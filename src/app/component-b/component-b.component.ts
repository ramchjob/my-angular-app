import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ComponentBaseComponent } from '../component-base/component-base.component';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent extends ComponentBaseComponent implements OnInit {
  users: any = [];
  
  constructor(private userService: UserServiceService) {
    super();
    this.name = 'ComponentB';
  }
  async ngOnInit() {
    try {
      let users$ = await this.userService.getUsers();
      this.users = await lastValueFrom(users$);
    } catch (error) {
      console.log(error);
    }
  }

}
