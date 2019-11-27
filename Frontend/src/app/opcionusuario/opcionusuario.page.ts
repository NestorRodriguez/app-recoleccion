import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-opcionusuario',
  templateUrl: './opcionusuario.page.html',
  styleUrls: ['./opcionusuario.page.scss'],

})
export class OpcionusuarioPage  {
  constructor( public authService : AuthService,
     public actionSheetController: ActionSheetController){}


Onlogout() {
    this.authService.logout();

  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
       
          this.Onlogout()
        },
      
      }]
    });
    await actionSheet.present();
  }

}
