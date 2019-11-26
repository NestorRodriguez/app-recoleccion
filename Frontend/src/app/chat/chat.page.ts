import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ChatsService, chat } from '../servicios/chats.service';
import {ModalController} from "@ionic/angular"
import {ChatsComponent} from "../componentes/chats/chats.component";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public chatsRooms :any = [];

  constructor(public authservice: AuthService, public chatservice: ChatsService,
    private modal : ModalController) {}

  ngOnInit() {
    this.chatservice.getchatRooms().subscribe(chats => {
     
this.chatsRooms = chats;
     
    })
  }

  openChat(chat){
 
 this.modal.create({
   component : ChatsComponent,
   componentProps : {
    chat: chat
   }
 }).then( (modal) => modal.present())
  }
}
