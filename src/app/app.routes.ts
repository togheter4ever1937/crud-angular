import { PreviewComponent } from './components/preview/preview.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'addUser',
    component: NewUserComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'preview/:id',
    component: PreviewComponent,
  },
  {
    path: 'editUser/:id',
    component: EditUserComponent,
  },
];
