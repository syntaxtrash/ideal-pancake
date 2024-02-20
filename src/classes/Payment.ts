import { HasFormatter } from "../interfaces/HasFormatter";
export class Payment implements HasFormatter {
  constructor(
    private recipient: string,
    private details: string,
    private amount: number
  ) {}

  format() {
    return `${this.recipient} owed ${this.amount} for ${this.details}`;
  }
}
