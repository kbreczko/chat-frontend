import {Component, Input, OnInit} from '@angular/core';
import {MessageData} from '../../modules';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  private message: MessageData;

  @Input('messages')
  private messages: MessageData[];

  constructor() {
  }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.messages.push(this.message);

    this.message = new MessageData('', 'example', new Date());
  }

}
