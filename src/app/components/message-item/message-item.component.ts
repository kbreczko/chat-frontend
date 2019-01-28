import {Component, Input, OnInit} from '@angular/core';
import {MessageData} from '../../modules';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  message: MessageData;

  constructor() { }

  ngOnInit() {
  }

}
