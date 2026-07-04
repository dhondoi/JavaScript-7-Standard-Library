// ● RegExp merupakan implementasi dari regular expression di JavaScript
// ● Regular expression merupakan fitur untuk mencari text dengan pola
// ● Membuat regular expression di JavaScript bisa dilakukan dengan dua cara, yaitu menggunakan
// literal notation atau membuat object RegExp
// ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
{
  //create regex

  const regex1 = /eko/;
  const regex2 = new RegExp("eko");
  const regex3 = new RegExp(/eko/);
}

{
  // test regex

  const name = "eko kurniawan eko khannedy";
  const regex = /eko/;
  // Eksekusi regex, jika menemukan data sesuai pola, maka kembalikan result nya,
  // jika tidak maka null
  const result = regex.exec(name);
  console.info(result);
  //   [
  //   'eko',
  //   index: 0,
  //   input: 'eko kurniawan eko khannedy',
  //   groups: undefined
  //   ]
  console.info(regex.exec("tidak ada")); //null
  // Eksekusi regex, jika menemukan data
  // sesuai pola, maka return true, jika tidak
  // maka false
  const test = regex.test(name);
  console.info(test); //true
  console.info(regex.test("tidak ada")); //false
}

{
  //regex modifier
  // i Regex menjadi incase sensitive
  // g Pencarian dilakukan secara global, secara default setelah menemukan data, pencarian akan berhenti
  // m Multiline, pencarian dilakukan di tiap baris (enter)
  const name = "eko kurniawan\nEko khannedy\nEdo Kurniawan";
  const regex1 = /^e.o/gim;
  const regex2 = /Kurniawan/gi;

  let result;
  while ((result = regex1.exec(name)) !== null) {
    console.info(result);
  }

  while ((result = regex2.exec(name)) !== null) {
    console.info(result);
  }
}

{
  // advanced regex
  // ● Assersions : indikasi awal dan akhir teks
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
  // ● Character Classes : membedakan antara huruf dan angka
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
  // ● Group dan Range : melakukan grouping atau range huruf atau angka
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
  // ● Quantifiers : menentukan jumlah huruf atau angka
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers
  const regex = /ek[ioaeu]/gi;

  const name = "eko eki eka eku eke edo eko eki";
  let result;
  while ((result = regex.exec(name)) !== null) {
    console.info(result);
  }
}

{
  const name = "edo eko eki eka eku eke edo eko eki";
  // Mencari semua data yang sesuai dengan regex
  console.info(name.match(/ek[aiueo]/gi));
  //   Mencari index data yang sesuai dengan regex
  console.info(name.search(/ek[aiueo]/gi));
  //   Mengubah data dengan value yang sesuai regex
  console.info(name.replace(/ek[aiueo]/i, "kamu"));
  //   Mengubah semua data dengan value yang sesuai regex
  console.info(name.replaceAll(/ek[aiueo]/gi, "kamu"));
  //   Memotong string dengan regex
  console.info(name.split(/e/gi));
}
