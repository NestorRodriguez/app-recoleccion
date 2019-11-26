import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from "@ionic/angular";
import {message } from "../../models/message";
import {ChatsService} from "../../servicios/chats.service";
import { constants } from 'os';
import { VirtualTimeScheduler } from 'rxjs';





@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {

public chat : any;
//public message : message;
public mensajes =[];
public room : any;
public msg : string;

  constructor
  (private navparams : NavParams,
  private modal : ModalController,
   private ChatsService : ChatsService) { }

  ngOnInit() {
     
  this.ChatsService.getChatRoom(this.chat.id).subscribe(room =>{
    console.log(room)
    this.room=room;

  })

  this.chat = this.navparams.get('chat')
}

closechat()
{
 this.modal.dismiss()
}

sendMessage(){
  const mensaje: message = {
    content : this.msg,
    type : 'text',
    date : new Date()
  }

  this.ChatsService.sendMsgToFirebar(mensaje, this.chat.id);
  this.msg ="";
  
}
}
