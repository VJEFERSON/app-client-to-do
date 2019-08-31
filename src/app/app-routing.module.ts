import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/LoginComponent';
import { RegisterComponent } from './register/RegisterComponent';
import { UserComponent } from './user/UserComponents';
import { TaskComponent } from './tasks/TaskComponent';
import { TagComponent } from './tags/TagComponent';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },
  { path: 'tasks', component: TaskComponent },
  { path: 'tags', component: TagComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
