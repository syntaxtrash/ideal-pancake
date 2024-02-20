import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplates } from "./classes/ListTemplates.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul") as HTMLUListElement;
const list = new ListTemplates(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "start");
});

// GENERICS

const addUID = <T extends { name: string }>(obj: T) => {
  //   console.log("obj", obj);
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// const addUID = <T extends { name: string }>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

let docOne = addUID({ name: "pedro", age: 40 });
// let docTwo = addUID("shaun");

console.log(docOne.name);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "shaun" },
};

const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: "shoppingList",
  data: ["bread", "milk"],
};

console.log(docThree, docFour);
