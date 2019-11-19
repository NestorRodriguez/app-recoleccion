import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../servicios/auth.service';


@Component({
  selector: 'app-opcionusuario',
  templateUrl: './opcionusuario.page.html',
  styleUrls: ['./opcionusuario.page.scss'],

})
export class OpcionusuarioPage  {
  constructor( public authService : AuthService){}


Onlogout() {
    this.authService.logout();

  }

}
