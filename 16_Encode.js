// ● Saat kita menulis URL, kadang kita ingin menambahkan informasi tambahan seperti query
// parameter misalnya
// ● URL sendiri sudah memiliki standard encoding penulisan URL
// ● Standard encoding ini dilakukan agar penulisan URL aman ketika diterima oleh server
// ● Aman disini dalam artian informasi URL tidak berubah
// ● Contoh paling sederhana, misal, walaupun kita bisa mengirim spasi dalam url, tapi disarankan
// untuk di encode agar nilai spasi tidak benar-benar terlihat seperti spasi pada URL nya
// ● Misal ada query parameter dengan nama data, lalu kita ingin mengirimkan nilai kesana
// ● Misal nilainya adalah &eko=eko&, alhasil URL nya akan seperti berikut
// ● http://contoh.com?data=&eko=eko&
// ● URL diatas terlihat tidak ada masalah, tapi sebenarnya ketika diterima oleh server, parameter data
// bernilai kosong, kenapa? karena & dianggap sebagai pemisah antar parameter
// ● Artinya tanda seperti & dan lain-lain perlu di encode, agar tidak terjadi kesalahan data yang kita
// kirim
{
  // encode uri dan decode uri
  const url = "http://contoh.com/?name=Eko Kurniawan Khannedy";
  console.info(url); // http://contoh.com/?name=Eko Kurniawan Khannedy
  // Melakukan encode value, namun karakter yang
  // dipesan di URI tidak akan diubah ;,/?:@&=+$#
  const encoded = encodeURI(url);
  console.info(encoded); // http://contoh.com/?name=Eko%20Kurniawan%20Khannedy
  // Melakukan decode value hasil encodeURI()
  const decoded = decodeURI(encoded);
  console.info(decoded); // http://contoh.com/?name=Eko Kurniawan Khannedy
}

{
  // encode uri dan decode uri
  const value = "Eko&Kurniawan=Khannedy";
  const url = "http://contoh.com/?name=";
  console.info(url + value);//http://contoh.com/?name=Eko&Kurniawan=Khannedy

  const encoded = encodeURIComponent(value);
  console.info(url + encoded);//http://contoh.com/?name=Eko%26Kurniawan%3DKhannedy

  const decoded = decodeURIComponent(encoded);
  console.info(url + decoded);//http://contoh.com/?name=Eko&Kurniawan=Khannedy
}
