import {Token} from './token';

export class LoggedIn {
  userId: number;
  emailaddress: string;
  token: Token;

  constructor(userId: number, emailaddress: string, token: Token) {
    this.userId = userId;
    this.emailaddress = emailaddress;
    this.token = token;
  }
}
