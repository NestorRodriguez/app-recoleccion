import { Component, OnInit } from '@angular/core';
import {AuthService} from "../servicios/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  constructor(private authservice: AuthService) {}

  ngOninit(){
  }

  onSubmitHome()

  {
    console.log('estas en la funcion')
  }

}
