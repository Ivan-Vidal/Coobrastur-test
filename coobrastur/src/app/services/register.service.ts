import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../models/register'
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  mostrarMenuEmitter = new EventEmitter<boolean>();
  obj: object;
  json;
  
  constructor(
    private http: HttpClient, 
    private router: Router) { }

  login(register: Register){
    this.http.post<Register>('https://reqres.in/api/users', register, httpOptions).subscribe(
      obj => {
        console.log('Cadastrado com sucesso !');
        localStorage.setItem('userLogado', JSON.stringify(obj));
        this.router.navigateByUrl('/home');
       
      },
      error => {
        console.log('erro ao logar');
      }
    );  
  }
  usuarioCadastrado(): boolean {
    if(localStorage.getItem('userLogado')){
      return true;
    }
    return false;
  }
} 