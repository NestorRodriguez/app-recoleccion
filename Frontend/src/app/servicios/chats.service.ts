import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {map} from 'rxjs/operators';
import { message } from '../models/message';
import { firestore, auth } from 'firebase';
import {AuthService} from '../servicios/auth.service';


export interface chat {
  descritcion: string
  name: string
  id: string
  img : string
}


@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  constructor(private db: AngularFirestore, private AuthService: AuthService) {}

  getchatRooms() {
    return this.db.collection('chatsRooms').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as chat;
       data.id = a.payload.doc.id;
       return data;
      })
  }))
}
getChatRoom( chat_id : string ){
return this.db.collection('chatsRooms').doc(chat_id).valueChanges()

}
sendMsgToFirebar(message: message, chat_id : string){

  this.db.collection('chatsRooms').doc(chat_id).update({
    messages : firestore.FieldValue.arrayUnion(message),
  })

}
}