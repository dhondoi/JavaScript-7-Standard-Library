// ● Map merupakan representasi dari struktur data key-value
// ● Map mirip dengan tipe data object, hanya saja pada Map, semua method untuk manipulasi data
// sudah disediakan
// ● Map mengikuti kontrak iterable, sehingga bisa di iterasi secara default
// ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const map = new Map();
// Mengubah data Map dengan key = value
  map.set("Name", "Eko Kurniawan");
  map.set("Address", "Indonesia");

  console.info(map); // output: Map(2) { 'Name' => 'Eko Kurniawan', 'Address' => 'Indonesia' }
//   Mendapatkan data Map berdasarkan key
  console.info(map.get("Name")); // output: Eko Kurniawan
  console.info(map.get("Address")); // output: Indonesia
  console.info(map.get("Hobby")); // output: undefined

  for (const element of map) {
    console.info(`${element[0]} : ${element[1]}`);
  }

  map.forEach((value, key) => console.info(`${key} : ${value}`));
