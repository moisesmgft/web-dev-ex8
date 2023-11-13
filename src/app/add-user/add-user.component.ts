// add-user.component.ts

import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  newUser: string = '';

  constructor(private userService: UserService) {}

  addUser(): void {
    console.log(this);
    if (this.newUser.trim() !== '') {
      console.log("A");
      this.userService.addUser(this.newUser);
      this.newUser = '';
    }
  }
}
