import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { promise } from 'protractor';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { catchError, tap, map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  login(email: string, password: string ) {

    return new Promise((resolve, reject) => {

      this.AFauth.auth.signInWithEmailAndPassword(email, password) .then(user => {
     resolve(user);
      }).catch(err => reject(err));


    });

  }
  logout() {
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/home']);
    });
  }
  register(email: string, password: string, name: string) {
    return new Promise ((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
        console.log(res.user.uid);
        const uid = res.user.uid;
        this.db.collection('users').doc(name).set(
           {
          uid: ({uid}),
        name: ({name}),
      });

        resolve (res);
      }).catch(err => reject(err));
    });


  }
}
