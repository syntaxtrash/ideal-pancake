import { Invoice } from "./classes/Invoice.js";

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

console.log(me);
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
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
