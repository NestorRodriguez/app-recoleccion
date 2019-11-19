import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth"
import { promise } from 'protractor';
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router: Router) { }

  login(email:string, password:string) {

    return new Promise((resolve, reject)=>{

      this.AFauth.auth.signInWithEmailAndPassword(email, password) .then(user =>{
     resolve(user);
      }).catch(err => reject(err));
  

    }); 

  }
  logout(){
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/home']);
    }) 
  }
}
