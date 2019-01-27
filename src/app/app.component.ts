import {Component} from '@angular/core';
import {MessageData} from './modules';
import {environment} from '../environments/environment';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as Uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private stompClient;
  public message: MessageData;
  public messages: MessageData[];

  constructor() {
    this.initializeWebSocketConnection();
    this.message = new MessageData('', 'guest' + Uuid.v4(), new Date());
    this.messages = [
      new MessageData('Welcome to chat universe', 'bot', new Date())
    ];
  }

  private initializeWebSocketConnection() {
    const socket = new SockJS(environment.backend + '/socket');
    this.stompClient = Stomp.over(socket);
    const that = this;
    this.stompClient.connect(
      {},
      () => that.stompClient.subscribe('/chat', (message) => that.messages.push(JSON.parse(message.body))),
      (error) => console.log(`error: ${error}`)
    );
  }
}
