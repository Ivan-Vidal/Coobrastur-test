import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService} from './auth/auth.service'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { FormComponent } from './form/form.component'

const routes: Routes = [
  { path: '', redirectTo: 'home',canActivate: [AuthService], pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthService]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'editar/:id', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
