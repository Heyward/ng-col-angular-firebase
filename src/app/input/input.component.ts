import {Component, OnInit, Input} from '@angular/core';
import {ChatService} from '../chat.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() userAuth: string;
  mMsg: string;

  constructor(private msgService: ChatService) {
  }

  ngOnInit() {
  }

  sendMsg(msg) {
    if (msg !== null && msg !== "") {
      console.log(msg);
      let message = {
        message: msg,
        username: this.userAuth,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      };
      this.msgService.addMsg(message);
      this.mMsg = null;
    }
  }

}
