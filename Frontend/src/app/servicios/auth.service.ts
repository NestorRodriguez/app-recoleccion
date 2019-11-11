import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth"


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth) { }

  login(email:string, password:string) {

    this.AFauth.auth.signInWithEmailAndPassword(email, password) .then(res =>{
      console.log(res)
    }).catch(err => console.log('error:' + err ))


  }
}
