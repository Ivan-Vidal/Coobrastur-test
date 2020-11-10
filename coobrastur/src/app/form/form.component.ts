import { HomeService } from './../services/home.service';
import { FormGroup, FormBuilder,  ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup = this.fb.group({
    id: ['', []],
    avatar: ['',[Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]]
  })
  
  constructor(private fb: FormBuilder, private service: HomeService, private route: ActivatedRoute , private location: Location) { }
  
  ngOnInit(): void {
    
    this.route.params.subscribe(
      (params:any) =>{
        const id = params['id'];
        console.log(id)
        const client$ = this.service.loadById(id);
        client$.subscribe(client =>{
          console.log(client)
          this.updateForm(client.data);
        });
      }
      );
    }
    
    updateForm(client){
      this.form.patchValue({
        id: client.id,
        avatar: client.avatar,
        name: client.first_name  +  client.last_name,
        email: client.email
      });
      
    }
    onSubmit(){
      console.log(this.form.value)
      if(this.form.valid){
        console.log('submit')
        if(this.form.value.id){
          this.service.update(this.form.value).subscribe(sucess =>{
            this.location.back()
          },
          error =>{
            console.log('erro', error)
          },
          () => console.log("Update complete")
          )
        }
      }
    }
    
  }
  
