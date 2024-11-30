import { HomeComponent } from './components/home/home.component';
import { BodyComponent } from './components/home/body/body.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { HeaderComponent } from './components/home/header/header.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'crud';
}
