import {Component} from '@angular/core';
import {MessageData, MessageForm} from './modules';
import * as Uuid from 'uuid';
import {MessageService} from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message: MessageForm;
  public messages: MessageData[];

  constructor(private messageService: MessageService) {
    this.message = new MessageForm('', 'guest' + Uuid.v4());
    this.messages = [
      new MessageData('Welcome to chat universe', 'bot', new Date())
    ];

    this.messageService.initializeWebSocketConnection(this.messages);
  }
}
