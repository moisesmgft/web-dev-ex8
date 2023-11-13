// add-user.component.ts

import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  newUser: string = '';

  constructor(private userService: UserService) {}

  public addUser(): void {
    if (this.newUser.trim() !== '') {
      console.log('AAnar');
      this.userService.addUser(this.newUser);
      this.newUser = '';
    }
  }
}
