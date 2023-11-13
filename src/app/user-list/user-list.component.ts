// user-list.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de Usuários</h2>
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
  `,
})
export class UserListComponent implements OnInit {
  users: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
