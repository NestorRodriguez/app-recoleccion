import { Component, OnInit } from '@angular/core';
import {AuthService} from "../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  email: string;
  password: string;

  constructor(private authservice: AuthService, public router: Router) {}

  ngOninit(){
  }

  onSubmitHome()


  {
    this.authservice.login(this.email, this.password).then(res =>{
this.router.navigate(['/opcionusuario']);
    }).catch(err => alert('Los datos no exixten o son incorrectos'))
  }

}
