// ● Tipe data String sudah kita bahas pada materi JavaScript Dasar
// ● Namun kita belum membahas instance method atau juga instance properties yang terdapat di String
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
const name = "Eko Kurniawan Khannedy";
console.info(name.length); // output: 22
// ● String sendiri memiliki banyak sekali instance method dan properties
// ● Hal ini menjadikan untuk memanipulasi data String sangat mudah di JavaScript, seperti mengubah
// menjadi lowercase, UPPERCASE, memotong string menjadi array dan lain-lain
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods
console.info(name.toLowerCase());// output: eko kurniawan khannedy
console.info(name.toUpperCase());// output: EKO KURNIAWAN KHANNEDY
console.info(name.split(" "));// output: [ 'Eko', 'Kurniawan', 'Khannedy' ]
console.info(name);// output: Eko Kurniawan Khannedy
const input = "     input data     ";
console.info(input.trim());// output: input data
console.info(input);// output:      input data     
