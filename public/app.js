import { Invoice } from "./classes/Invoice.js";
const me = {
    name: "Juan",
    age: 30,
    speak: (text) => {
        console.log(text);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("hello " + person.name);
};
greetPerson(me);
console.log(me);
const inv1 = new Invoice("Juan", "Work in website", 500);
const inv2 = new Invoice("Pedro", "Work in website", 500);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
// console.log(invoices);
for (let index = 0; index < invoices.length; index++) {
    const element = invoices[index];
    //   console.log(element.format());
}
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
