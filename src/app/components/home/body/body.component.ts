import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../services/user-data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [CommonModule, RouterLink],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent implements OnInit {
  users: any[] = [];

  constructor(private dataService: UserDataService) {}

  ngOnInit(): void {
    this.dataService.getUserData().subscribe((data: any) => {
      console.log(data);
      this.users = data;
    });
  }

  deleteUser(id: number) {
    this.dataService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter((user) => user.id !== id);
      },
      error: (err) => {
        alert('Failed to delete the user: ' + err.message);
      },
    });
  }
}
