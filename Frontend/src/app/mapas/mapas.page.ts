import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit  {

  public lat = 4.60972222222;
   public lng = -74.0816666667;
 
   constructor(private navControl: NavController) { }
 
   ngOnInit() {
     if (navigator) {
       navigator.geolocation.getCurrentPosition(pos => {
         this.lng = +pos.coords.longitude;
         this.lat = +pos.coords.latitude;
       });
     }
   }
 
   EnviarCordenadas() {
     const latitud = this.lat;
     const longitud = this.lng;
     this.navControl.navigateForward(`minaregistro/${latitud}/${longitud}`);
     this.ngOnInit();
   }
 }