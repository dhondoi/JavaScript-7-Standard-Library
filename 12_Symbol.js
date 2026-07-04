// ● Symbol merupakan tipe data yang digaransi akan selalu unique setiap kali kita membuat data
// symbol
// ● Symbol kadang banyak digunakan untuk membuat key pada object
// ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
{
  // symbol
  const firstName = Symbol("firstName");
  const lastName = Symbol("lastName");

  const person = {};
  person[firstName] = "Eko";
  person[lastName] = "Khannedy";

  console.info(person); // { [Symbol(firstName)]: 'Eko', [Symbol(lastName)]: 'Khannedy' }
}

{
  // symbol for
  // ● Kadang agak sulit membuat symbol harus selalu menggunakan variable
  // ● Pembuatan symbol juga bisa menggunakan static method Symbol.for(key)
  // ● Jika kita menggunakan key yang sama, Symbol yang sama akan sekalu dikembalikan
  console.info(Symbol.for("firstName") === Symbol.for("firstName")); // true

  const person = {};
  person[Symbol.for("firstName")] = "Eko";
  person[Symbol.for("lastName")] = "Khannedy";

  console.info(person); // { [Symbol(firstName)]: 'Eko', [Symbol(lastName)]: 'Khannedy' }
  console.info(person[Symbol.for("firstName")]); // Eko
  console.info(person[Symbol.for("lastName")]); // Khannedy
}
