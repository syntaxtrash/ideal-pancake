export class Invoice {
  constructor(
    private client: string,
    private details: string,
    private amount: number
  ) {}

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}
