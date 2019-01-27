import {Component} from '@angular/core';
import {MessageData} from './modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message: MessageData;
  public messages: MessageData[];

  constructor() {
    this.message = new MessageData('', 'example', new Date());
    this.messages = [
      new MessageData('Welcome to chatbot universe', 'bot', new Date())
    ];
  }
}
