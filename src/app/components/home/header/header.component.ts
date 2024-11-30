import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDataService } from '../../../services/user-data.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private userService: UserDataService) {}

  deleteAllUser() {
    this.userService.deleteAllUser().subscribe((error) => {
      console.log(error);
    });
  }
}
