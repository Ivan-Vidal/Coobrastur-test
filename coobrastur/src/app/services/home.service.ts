import { client } from './../models/home';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { UtilsService } from '../services/utils.service'
import { retry, catchError, delay } from 'rxjs/operators';
import { ControlContainer } from '@angular/forms';


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
  
  client: any;
  
  constructor(private utils: UtilsService,
    private http: HttpClient,
    private router: Router ,private route: ActivatedRoute ) { }
    
    //pegar a lista de clientes
    
    public getClient(): Observable<client[]> {
      return this.http.get<client[]>('https://reqres.in/api/users?', httpOptions).pipe(
      retry(1),
      catchError(this.utils.handleError)
      )
      
    }
    nextPrev(page){
    let url = this.http.get<client[]>('https://reqres.in/api/users?page=' + page ).pipe(retry(1),
    catchError(this.utils.handleError))
    }
    // Carregar cliente pelo id
    loadById(id) {
      return this.http.get<client[]>('https://reqres.in/api/users'  + '/' + id).pipe(retry(1),
      catchError(this.utils.handleError)
      )
    }
    update(client) {
     return this.http.put<client[]>('https://reqres.in/api/users' + '/' + client.id, httpOptions)
    .pipe(
    retry(1),
   catchError(this.utils.handleError))
    }
  }