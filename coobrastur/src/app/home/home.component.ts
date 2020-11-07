import { client } from './../models/home';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clients: any[] = [];
  constructor(private hService: HomeService) { }

  ngOnInit(): void {
    this.getClient()
  }
  getClient() {
    this.hService.getClient().subscribe((obj:any) => {
    if(!obj.data) return console.log('error');
     this.clients = obj.data; 
     console.log('atualizando...', this.clients)
    });
  }


}
