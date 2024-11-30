import { UserDataService } from './../../services/user-data.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-new-user',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  constructor(private userService: UserDataService) {}
  name!: string;
  phone!: string;
  email!: string;
  isEmpty!: boolean;
  addUser() {
    if (this.name && this.phone && this.email) {
      this.isEmpty = false;
      let newUser = {
        name: this.name,
        phone: this.phone,
        email: this.email,
      };
      this.userService.addUser(newUser).subscribe((error) => {
        console.log(error);
      });
      this.name = '';
      this.phone = '';
      this.email = '';
    } 
  }
}
