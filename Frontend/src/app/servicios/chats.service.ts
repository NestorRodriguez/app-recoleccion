import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  constructor(private db: AngularFirestore) {}

  getchatRooms() {
    return this.db.collection('chatsRooms').snapshotChanges();

  }
}
