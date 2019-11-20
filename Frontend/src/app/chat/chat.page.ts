import { Component, OnInit } from '@angular/core';
import { ChatsService } from "../servicios/chats.service";
import { AuthService } from '../servicios/auth.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements  OnInit {

  constructor(public authservice : AuthService, public chatservice : ChatsService ) { }

  ngOnInit() {
    //this.chatservice.getchatRooms().Subscribe(chats => {
      //console.log(chats)
   // })
  }

  




}
