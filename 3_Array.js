// ● Tipe data Array sudah kita bahas di materi JavaScript Dasar
// ● Namun kita hanya membahas beberapa instance method yang ada di Array
// ● Sebenarnya, terdapat banyak sekali Instance Method yang ada di Array, dan kita akan coba bahas
// beberapa di sini
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods 

// Array Loop
// ● Sebelumnya kita biasa menggunakan for in dan for of untuk melakukan iterasi Array, namun Array
// juga memiliki method yang bernama forEach()
// ● Method forEach bisa digunakan juga untuk melakukan iterasi data array
{
  // array loop
  console.log("--- LOOP ---");
  const array = ["Eko", "Kurniawan", "Khannedy"];
  array.forEach(function (value, index) {
    console.info(`${index} : ${value}`);
  });
  array.forEach((value, index, array) =>
    console.info(`index ${index} : ${value} dari array ${array}`),
  );
  array.forEach((value) => console.info(value));
}

// Array Queue
// ● Dalam struktur data, terdapat tipe struktur data bernama Queue (Antrian)
// ● Dimana data masuk akan diposisikan di urutan paling belakang
// ● Sedangkan data keluar akan diposisikan dari urutan paling depan
// ● Mirip sekali dengan antrian, atau istilahnya FIFO (first in first out)
// ● Kita bisa menggunakan Array dengan bantuan function push() untuk menambah data di belakang,
// dan shift() untuk mengambil dan menghapus data paling depan
{
  // array queue
  console.log("--- QUEUE ---");
  const queue = [];
  queue.push("Eko");
  queue.push("Kurniawan");
  queue.push("Khannedy");
  console.info(queue.shift()); // output: Eko
  console.info(queue.shift()); // output: Kurniawan
  console.info(queue.shift()); // output: Khannedy
  console.info(queue.shift()); // output: undefined
}
// Array Stack
// ● Struktur data Stack (Tumpukan) kebalikan dari Queue, dimana aturannya mirip dengan tumpukan
// kartu
// ● Saat kita memasukkan data, kita akan memasukkan di urutan paling belakang (atau atas)
// ● Sedangkan saat kita mengambil data, kita akan mengambil data dari paling belakang (atau atas)
// terlebih dahulu
// ● Stack ini sifatnya LIFO (last in first out)
// ● Untuk menambah diurutan belakang, kita bisa menggunakan function push()
// ● Dan untuk mengambil dan menghapus paling belakang, kita bisa menggunakan function pop()
{
  // array stack
  console.log("--- STACK ---");
  const stack = [];
  stack.push("Eko");
  stack.push("Kurniawan");
  stack.push("Khannedy");
  console.info(stack.pop()); // output: Khannedy
  console.info(stack.pop()); // output: Kurniawan
  console.info(stack.pop()); // output: Eko
  console.info(stack.pop()); // output: undefined
}

{
  // array search
  console.log("--- SEARCH ---");
  const source = [1, 2, 10, 4, 5, 1, 2, 3, 4, 5];
  //   Mencari data sesuai dengan kondisi
  console.info(source.find((value) => value > 3)); // output: 10
  //   Mengecek apakah terdapat data
  console.info(source.includes(7)); // output: false
  //   Mencari Index
  //   Mencari data index sesuai dengan kondisi
  console.info(source.findIndex((value) => value > 3)); // output: 2 (index mulai dari 0)
  //   Mengecek posisi index data
  console.info(source.indexOf(5)); // output: 4 (index mulai dari 0)
  //   Mengecek posisi index data terakhir
  console.info(source.lastIndexOf(5)); // output: 9 (index mulai dari 0)
}

{
  // array filter
  //   Melakukan filter data yang kondisinya bernilai true
  console.log("--- FILTER ---");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ganjil = numbers.filter((value) => value % 2 === 1);
  const genap = numbers.filter((value) => value % 2 === 0);
  console.info(numbers); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.info(ganjil); // output: [ 1, 3, 5, 7, 9 ]
  console.info(genap); // output: [ 2, 4, 6, 8, 10 ]
}

{
  // array transform
  console.log("--- TRANSFORM ---");
  const names = ["Eko", "Kurniawan", "Khannedy"];
  //   Melakukan transform tiap value dan menghasilkan array result
  const namesUpper = names.map((value) => value.toUpperCase());
  console.info(namesUpper); // output:[ 'EKO', 'KURNIAWAN', 'KHANNEDY' ]
  //   Melakukan transform dengan menggunakan value array dan value selanjutnya,
  // lalu hasilnya dilanjutkan ke iterasi selanjutnya
  const namesReduce = names.reduce((before, value) => before + " " + value);
  console.info(namesReduce); // output: Eko Kurniawan Khannedy
  //   Sama seperti reduce(), namun dilakukan dari belakang
  const namesRight = names.reduceRight((before, value) => before + " " + value);
  console.info(namesRight); // output: Khannedy Kurniawan Eko
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const total = numbers.reduce((before, value) => before + value);
  console.info(total); // output: 55
}
