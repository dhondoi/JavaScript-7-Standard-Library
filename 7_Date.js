// ● JavaScript memiliki tipe data untuk representasi waktu dan tanggal, yaitu Date
// ● Date merupakan representasi milisecond sejak tanggal 1 Januari 1970, atau dikenal dengan Epoch
// & Unix Timestamp
// ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
{
  // create date

  // Membuat date saat ini
  const date1 = new Date();
  console.info(date1); // output: 2026-07-04T09:18:56.917Z

  // Membuat date dengan tanggal
  const date2 = new Date(2020, 3, 15);
  console.info(date2); // output: 2020-11-09T17:00:00.000Z

  // Membuat date dengan parameter sampai milis
  const date3 = new Date(2020, 10, 10, 16, 15, 9, 123);
  console.info(date3); // output: 2020-11-10T09:15:09.123Z

  // Membuat date dari epoch atau unix timestamp
  const date4 = new Date(1623167419514);
  console.info(date4); // output: 2021-06-08T15:50:19.514Z
}

{
  // epoch & unix timestamp
  // ● Dalam menggunakan tipe data waktu, biasanya disemua bahasa pemrograman akan mendukung
  // yang namanya epoch & unix timestamp
  // ● Epoch & Unix timestamp merupakan hitungan miliseconds setelah tanggal 1 Januari 1970
  // ● JavaScript pun mendukung pembuatan waktu dalam bentuk epoch dan unix timestamp
  // ● Untuk mendapatkan waktu saat ini dalam epoch & unix timestamp, kita bisa menggunakan
  // Date.now()
  // ● Untuk mengubah dari object date ke epoch & unix timestamp, kita bisa menggunakan function
  // getTime()
  const date1 = new Date();
  console.info(date1.getTime()); // output: 1783156922750

  const date2 = new Date(2020, 10, 10);
  console.info(date2.getTime()); // output: 1604941200000

  const date3 = new Date(2020, 10, 10, 16, 15, 9, 123);
  console.info(date3.getTime()); // output: 1604999709123

  const date4 = new Date(1623167419514);
  console.info(date4.getTime()); // output: 1623167419514

  console.info(Date.now()); // output: 1783156922752
}

{
  // date parsing
  // ● Kita juga bisa melakukan parsing membuat date dari string menggunakan method
  // Date.parse(value)
  // ● Format string harus YYYY-MM-DDTHH:mm:ss.sssZ
  // ● Dimana jika kita hanya membuat date berisi tanggal saya, kita cukup gunakan YYYY-MM-DD
  // ● Jika date dengan tanggal dan waktu, gunakan YYYY-MM-DDTHH:mm:ss.sss
  // ● Jika date dengan tanggal, waktu dan timezone, gunakan YYYY-MM-DDTHH:mm:ss.sssZ
  // ● Hasil parsing adalah unix timestamp, bukan object date
  const time = Date.parse("2020-10-10T08:45:45.123+07:00");
  console.info(time); // output: 1602294345123

  const date = new Date(time);
  console.info(date); // output: 2020-10-10T01:45:45.123Z
}

{
  // getter dan setter

  const date = new Date();

  console.info(date.getFullYear()); // output: 2026
  console.info(date.getMonth()); // output: 6
  console.info(date.getDate()); // output: 4
  console.info(date.getHours()); // output: 16
  console.info(date.getMinutes()); // output: 34
  console.info(date.getSeconds()); // output: 40
  console.info(date.getMilliseconds()); // output: 877
  console.info(date.getTimezoneOffset()); // output: -420
}
