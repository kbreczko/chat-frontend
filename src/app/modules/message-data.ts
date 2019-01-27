export class MessageData {
  content: string;
  timestamp: Date;
  user: string;

  constructor(content: string, user: string, timestamp: Date) {
    this.content = content;
    this.timestamp = timestamp;
    this.user = user;
  }
}
