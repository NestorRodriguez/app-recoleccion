import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ChatsService } from '../servicios/chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  constructor(
    public authservice: AuthService,
    public chatservice: ChatsService
  ) {}

  ngOnInit() {
    this.chatservice.getchatRooms().subscribe(chats => {
      chats.map(chat => {
        console.log(chat.payload.doc.data());
      });
    })
  }
}
