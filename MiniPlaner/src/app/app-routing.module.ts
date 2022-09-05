import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { BoardComponent } from './pages/board/board.component';
import { ListComponent } from './pages/list/list.component';
import { TodoComponent } from './pages/todo/todo.component';


const routes: Routes = [
  { path: '', component: PagesComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'board', component: BoardComponent, canActivate: [AuthGuard]},
    { path: 'list', component: ListComponent,  canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent},
    { path: 'todo', component: TodoComponent, },
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
