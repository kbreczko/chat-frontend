export class MessageForm {
  content: string;
  user: string;

  constructor(content: string, user: string) {
    this.content = content;
    this.user = user;
  }
}
