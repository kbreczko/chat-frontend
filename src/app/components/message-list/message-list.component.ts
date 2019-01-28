import {Component, Input, OnInit} from '@angular/core';
import {MessageData} from '../../modules/message-data';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input('messages')
  messages: MessageData[];

  constructor() { }

  ngOnInit() {
  }

}
