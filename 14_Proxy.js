// ● Proxy merupakan fitur yang bisa digunakan sebagai wakil sebuah data
// ● Dengan menggunakan proxy, semua interaksi ke data akan selalu melalui Proxy terlebih dahulu
// ● Dengan ini, kita bisa melakukan apapun sebelum interaksi dilakukan ke data yang dituju
// ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// ● Pembuatan Proxy perlu menggunakan handler, dimana dalam handler, kita bisa membuat function
// yang dinamakan interceptor yang digunakan ketika mengambil data atau mengubah data ke target
// ● Untuk membuat Proxy, kita bisa menggunakan new Proxy(target, handler)
const target = {
  middleName: "Kurniawan",
};

const handler = {
  get: function (target, property) {
    console.info(`Access property : ${property}`);
    return target[property];
  },
  set: function (target, property, value) {
    console.info(`Change property ${property} : ${value}`);
    if (value == null) {
      // throw new Error("Tidak boleh null");
      target[property] = "";
    } else {
      target[property] = value;
    }
  },
};

const proxy = new Proxy(target, handler);
proxy.firstName = "Eko"; //Change property firstName : Eko
proxy.lastName = null; //Change property lastName : null

console.info(proxy.firstName);
// Access property : firstName
// Eko

console.info(proxy.middleName);
// Access property : middleName
// Kurniawan

console.info(proxy.lastName);
// Access property : lastName

console.info(target);
//{ middleName: 'Kurniawan', firstName: 'Eko', lastName: '' }
