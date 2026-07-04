// ● Tipe data object sudah sering sekali kita bahas di JavaScript Dasar dan JavaScript OOP
// ● Pada materi ini, kita akan bahas banyak static method yang terdapat pada Object
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
{
  // object freeze & seal
  // ● Secara default, object bisa diubah atau dihapus properties nya
  // ● Jika kita ingin mengubah sebuah object menjadi object yang tidak bisa diubah atau dihapus, kita
  // bisa menggunakan beberapa static method
  console.log("--- FREEZE & SEAL ---");
  const person = {
    firstName: "Eko",
    lastName: "Khannedy",
  };
  // ● Object.freeze() digunakan untuk mengubah object menjadi object yang tidak bisa diubah atau
  // dihapus attribute nya
  Object.freeze(person);
  // ● Object.seal() digunakan untuk mengubah object menjadi object yang tidak bisa dihapus attribute
  // nya
  //   Object.seal(person);
  person.firstName = "Budi";
  person.middleName = "Kurniawan";
  delete person.lastName;
  console.info(person); // output: { firstName: 'Eko', lastName: 'Khannedy' }
}

{
  // object assign
  // ● Kadang kita ada kasus menggabungkan semua attribute dari sebuah object ke object lain
  // ● Hal ini bisa kita lakukan dengan menggunakan Object.assign(target, source)
  console.log("--- ASSIGN ---");
  const target = {
    firstName: "Eko",
  };
  const source = {
    lastName: "Khannedy",
  };
  Object.assign(target, source);
  console.info(target); // output: { firstName: 'Eko', lastName: 'Khannedy' }
  console.info(source); // output: { lastName: 'Khannedy' }
}

{
  // Object property name & value
  //   ● Object juga memiliki static method untuk digunakan mengambil semua properties names dan
  // values
  console.log("--- PROPERTY NAME & VALUE ---");
  const person = {
    firstName: "Eko",
    lastName: "Khannedy",
  };
  // ● Object.values() digunakan untuk mengambil semua property value
  console.info(Object.values(person)); // output: [ 'Eko', 'Khannedy' ]
  // ● Object.getPropertyNames() digunakan untuk mengambil semua properti name
  console.info(Object.getOwnPropertyNames(person)); // output: [ 'firstName', 'lastName' ]
}
