import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user'
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
     private http:HttpClient,
     private router: Router
    ) { }
    login(user: User){
      this.http.post<User>('https://reqres.in/api/login', user, httpOptions).subscribe(
        obj => {
          console.log('logou com sucesso');
          localStorage.setItem('userLogado', JSON.stringify(obj));
          this.router.navigateByUrl('/home');
         
        },
        error => {
          console.log('erro ao logar', error);
        }
      );  
    }
    usuarioLogado(): boolean {
      if(localStorage.getItem('userLogado')){
        return true;
      }
      return false;
    }
    logout(){
      localStorage.removeItem('userLogado')
      this.router.navigateByUrl('/login');
      console.log('Saindo...')
    }
}
