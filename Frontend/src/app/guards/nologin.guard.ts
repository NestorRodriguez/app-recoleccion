import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';

import { promise } from 'protractor';
import {AngularFireAuth} from "@angular/fire/auth";
import { auth } from 'firebase';
import {map} from "rxjs/operators";
import { isNullOrUndefined } from 'util';



@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {
  constructor(private AFauth : AngularFireAuth,
    private router: Router){}

    canActivate(
      next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.AFauth.authState.pipe(map(auth =>{
        if(isNullOrUndefined(auth)){
          
        return true;
      }else{
        this.router.navigate(['/opcionusuario'])
      return false;
      }
      //console.log(auth);
      
      //return false;
      })) 
    }
    
  
}
