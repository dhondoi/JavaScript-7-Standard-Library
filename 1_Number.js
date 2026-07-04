// ● Number merupakan function yang digunakan untuk melakukan konversi ke tipe data number
// ● Jika data tidak bisa dikonversi ke number, secara otomatis hasilnya adalah NaN
// ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number 
const input = "12345";
const number = Number(input); // number = 12345
console.info(typeof input); // output: string
console.info(typeof number); // output: number
console.info(number); // output: 12345
console.info(Number("salah")); // output: NaN
// ● Number memiliki banyak static properties, seperti :
// ● Number.MIN_VALUE untuk mendapat number minimal
// ● Number.MAX_VALUE untuk mendapat number maksimal
// ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#static_properties
console.info(Number.MIN_VALUE); // output: 5e-324
console.info(Number.MAX_VALUE); // output: 1.7976931348623157e+308
console.info(Number.MIN_SAFE_INTEGER); // output: -9007199254740991
console.info(Number.MAX_SAFE_INTEGER); // output: 9007199254740991
console.info(Number.NaN); // output:NaN
// ● Number memiliki banyak static method, seperti :
// ● Number.isNaN(value) untuk mengecek apakah value NaN atau bukan
// ● Number.isInteger(value) untuk mengecek apakah value berupa integer atau bukan
// ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#static_methods
const data = Number("eko"); // data = NaN
console.info(Number.isInteger(data)); // output: false
console.info(Number.isNaN(data)); // output: true
//  Number memiliki banyak instance method, seperti :
// ● Number.toLocalString(locale) untuk mengubah number menjadi string sesuai locale :
// https://www.lansweeper.com/knowledgebase/list-of-currency-culture-codes/
// ● Number.toString(radix) untuk mengubah number menjadi string sesuai radix
// ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#instance_methods 
const value = Number("12345"); // value = 12345
console.info(value.toString(2)); // output: 11000000111001
/*
Secara matematis, komputer mencari tahu kombinasi perpangkatan 2 (2^n) 
mana saja yang jika dijumlahkan menghasilkan angka 12345.

Mari kita bedah angka biner 11000000111001 dari digit paling kiri 
(pangkat tertinggi) hingga paling kanan (pangkat terendah):

Digit ke-14: 1 * 2^13 = 8192
Digit ke-13: 1 * 2^12 = 4096
Digit ke-12: 0 * 2^11 = 0
Digit ke-11: 0 * 2^10 = 0
Digit ke-10: 0 * 2^9  = 0
Digit ke-9 : 0 * 2^8  = 0
Digit ke-8 : 0 * 2^7  = 0
Digit ke-7 : 0 * 2^6  = 0
Digit ke-6 : 1 * 2^5  = 32
Digit ke-5 : 1 * 2^4  = 16
Digit ke-4 : 1 * 2^3  = 8
Digit ke-3 : 0 * 2^2  = 0
Digit ke-2 : 0 * 2^1  = 0
Digit ke-1 : 1 * 2^0  = 1

Jika kita menjumlahkan semua hasil perpangkatan yang bernilai 1 di atas:
8192 + 4096 + 32 + 16 + 8 + 1 = 12345
*/
console.info(value.toLocaleString("id-ID")); // output: 12.345
console.info(value.toLocaleString("en-US")); // output: 12,345
