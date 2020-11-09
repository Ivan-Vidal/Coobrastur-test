import { HomeService } from './../services/home.service';
import { FormGroup, FormBuilder,  ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: HomeService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params:any) =>{
        const id = params['id'];
        console.log(id)
        const client$ = this.service.loadById(id);
        client$.subscribe(client =>{
this.updateForm(client);
        });
      }
    );



    this.form = this.fb.group({
      id: [null],
      avatar: ['',],
      name: ['',],
      email: ['',]
    })
  }

updateForm(client){
  this.form.patchValue({
    id: client.id,
    avatar: client.avatar,
    name: client.first_name,
    email: client.email
  });

}

}

