import {Component, Input, OnInit} from '@angular/core';
import {MessageData, MessageForm} from '../../modules';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  private message: MessageForm;

  @Input('messages')
  private messages: MessageData[];

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
  }

  public sendMessage(): void {
    if (this.message.content !== '') {
      this.messageService.send(this.message);
      this.message = new MessageForm('', this.message.user);
    }
  }
}
