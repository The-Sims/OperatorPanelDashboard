export class Incident {
  id: number;
  description: string;

  constructor(description: string);
  constructor(
    description: string,
    id?: number
  ) {
    this.id = id;
    this.description = description;
  }
}
