import { client } from './../models/home';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service'
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
total: any[] = [];
  clients: any[] = [];
  client
  form: FormGroup
  constructor(private hService: HomeService,private fb: FormBuilder,  private router: Router ,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getClient()
  }
  getClient() {
    this.hService.getClient().subscribe((obj:any) => {
    if(!obj.data) return console.log('error');
     this.clients = obj.data; 
     this.total = obj.total;
     console.log('atualizando...', this.clients)
    });
  }
  onEdit(id) {
      this.router.navigate(['editar', id]);
      

    }
  }
   
//    }
  //  editClient(client) {
 //     this.client = { ...client };
 //     console.log('cheguei aqui')
 //   }
  
  //}


