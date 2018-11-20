export class Token {
  token: string;
  creationDate: string;
  ttl: number;


  constructor(token: string, creationDate: string, ttl: number) {
    this.token = token;
    this.creationDate = creationDate;
    this.ttl = ttl;
  }
}
