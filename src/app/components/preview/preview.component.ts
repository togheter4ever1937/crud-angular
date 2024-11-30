import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-preview',
  imports: [RouterLink],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css',
})
export class PreviewComponent implements OnInit {
  constructor(
    private userService: UserDataService,
    private activateRouter: ActivatedRoute
  ) {}

  userInfo!: any;
  userId!: number;
  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe((data: any) => {
      this.userId = Number(data.params['id']);
      this.userService.getUserById(this.userId).subscribe((data) => {
        this.userInfo = data ;         
      });
    });
  }
}
