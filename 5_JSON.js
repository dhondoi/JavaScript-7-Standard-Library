// ● JSON singkatan dari JavaScript Object Notation
// ● JSON merupakan data String yang bentuknya mirip dengan JavaScript Object
// ● Saat ini JSON banyak sekali digunakan untuk komunikasi antara Server dan Client
// ● https://www.json.org/json-en.html
// ● JavaScript mendukung konversi data dari String json ke Object ataupun sebaliknya
// ● JSON.stringify() digunakan untuk melakukan konversi dari Object ke String
// ● JSON.parse() digunakan untuk melakukan konversi dari String ke Object
// ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
const person = {
        firstName: "Eko",
        middleName: "Kurniawan",
        lastName: "Khannedy",
        address : {
            country: "Indonesia",
            city: "Subang"
        },
        hobbies: [
            "Coding", "Game", "Traveling"
        ]
    };

    const json = JSON.stringify(person);
    console.info(json);

    const jsonObject = JSON.parse(json);
    console.info(jsonObject);