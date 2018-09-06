import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';

const config = {
  apiKey: 'AIzaSyDbt6Fg9PNQVaArW12Q_8C12FONJLiMI4k',
  authDomain: 'ng-col-angular-firebase.firebaseapp.com',
  databaseURL: 'https://ng-col-angular-firebase.firebaseio.com',
  projectId: 'ng-col-angular-firebase',
  storageBucket: 'ng-col-angular-firebase.appspot.com',
  messagingSenderId: '832734888325'
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
