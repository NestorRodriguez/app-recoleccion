import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from "@ionic/angular";




@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {

public name : string;
public mensajes =[
  'hola soy un mensaje',
  'hola soy un soy un segundo mensaje'
];
public msg : string;
  constructor(private navparams : NavParams, private modal : ModalController ) { }

  ngOnInit() {

  this.name = this.navparams.get('name')
}

closechat()
{
 this.modal.dismiss()
}

sendMessage(){
  this.mensajes.push(this.msg)
}
}
