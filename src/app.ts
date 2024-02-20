import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let doc1: HasFormatter;
let doc2: HasFormatter;

doc1 = new Invoice("Juan", "webwork", 500);
doc2 = new Payment("Pedro", "webwork payment", 500);

console.log(doc1);
console.log(doc2);

let docs: HasFormatter[] = [];

docs.push(doc1);
docs.push(doc2);

console.log(docs);

interface isPerson {
  name: string;
  age: number;
  speak: (a: string) => void;
  spend(a: number): number;
}

const me: isPerson = {
  name: "Juan",
  age: 30,
  speak: (text: string): void => {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(amount);
    return amount;
  },
};

const greetPerson = (person: isPerson) => {
  console.log("hello " + person.name);
};

greetPerson(me);

console.log("me", me);
const inv1 = new Invoice("Juan", "Work in website", 500);
const inv2 = new Invoice("Pedro", "Work in website", 500);

let invoices: Invoice[] = [];

invoices.push(inv1);
invoices.push(inv2);

// console.log(invoices);

for (let index = 0; index < invoices.length; index++) {
  const element = invoices[index];
  //   console.log(element.format());
}

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log(doc.format());
  //   console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
