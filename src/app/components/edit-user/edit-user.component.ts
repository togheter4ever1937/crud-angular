import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements OnInit {
  usrerId!: number;
  userInfo = {
    id: 0,
    name: '',
    phone: '',
    email: '',
  };

  constructor(
    private activateRouter: ActivatedRoute,
    private userService: UserDataService
  ) {}

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe((data: any) => {
      this.usrerId = Number(data.params['id']);
    });
    this.userService.getUserById(this.usrerId).subscribe((data) => {
      this.userInfo.id = data.id;
      this.userInfo.name = data.name;
      this.userInfo.phone = data.phone;
      this.userInfo.email = data.email;
      // console.log(this.userInfo);
    });
  }

  updateUserInfo(userId: number) {
    this.userService
      .updateUserInfo(userId, this.userInfo)
      .subscribe((error) => {
        console.log(error);
      });
  }
}
