import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService} from './auth/auth.service'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  { path: '', redirectTo: 'home',canActivate: [AuthService], pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthService]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
