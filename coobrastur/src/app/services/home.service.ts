import { client } from './../models/home';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { UtilsService } from '../services/utils.service'
import { retry, catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  mostrarMenuEmitter = new EventEmitter<boolean>();
  obj: object;
  json;
  
  constructor(private utils: UtilsService,
    private http: HttpClient, 
    private router: Router) { }
    
    public  getClient(): Observable<client[]> {
      return this.http.get<client[]>('https://reqres.in/api/users?page=2',httpOptions).pipe(
      retry(1),
      catchError(this.utils.handleError)
      )
      
    }
    
    //username(){
    // this.json = localStorage.getItem('userLogado');
    //let response = JSON.parse(this.json);
    //console.log('nome do usuario: ' + response.user.name)  
    //}
  } 