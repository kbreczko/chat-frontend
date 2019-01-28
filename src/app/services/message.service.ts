import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {MessageData, MessageForm} from '../modules';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private stompClient;

  constructor() {
  }

  public initializeWebSocketConnection(messages: MessageData[]) {
    const socket = new SockJS(environment.backend + '/socket');
    this.stompClient = Stomp.over(socket);
    const that = this;
    this.stompClient.connect(
      {},
      () => that.stompClient.subscribe('/chat', (message) => messages.push(JSON.parse(message.body))),
      (error) => setTimeout(() => {
        this.initializeWebSocketConnection(messages);
      }, 1000)
    );
  }

  public send(message: MessageForm) {
    this.stompClient.send('/api/v1/message', {}, JSON.stringify(message));
  }
}
