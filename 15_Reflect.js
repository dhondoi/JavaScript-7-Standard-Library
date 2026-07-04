// ● Reflect merupakan class yang digunakan untuk mengeksekusi JavaScript function
// ● Reflect tidak memiliki constructor, dan cara penggunaan Reflect tidak dengan membuat object
// dengan new Reflect
// ● Penggunaan Reflect adalah menggunakan banyak sekali static methodnya
// ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
const person = {};

Reflect.set(person, "firstName", "Eko");
Reflect.set(person, "lastName", "Khannedy");

console.info(person); // { firstName: 'Eko', lastName: 'Khannedy' }

console.info(Reflect.get(person, "firstName")); // Eko
console.info(Reflect.get(person, "lastName")); // Khannedy

console.info(Reflect.has(person, "firstName")); // true
console.info(Reflect.has(person, "middleName")); // false
console.info(Reflect.has(person, "lastName")); // true
