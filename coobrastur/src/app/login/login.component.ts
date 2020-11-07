import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormGroup, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submit: boolean;

  constructor( private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.submit = false;
    
    this.loginForm = this.fb.group({
      'email': ['', ],
      'password': ['', ],
    });
  }

  login(){
    console.log('login em progresso')
    this.submit = true;
    this.loginService.login(this.loginForm.value);
  }

}
