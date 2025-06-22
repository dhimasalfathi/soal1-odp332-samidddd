// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
resultOne = 0
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        resultOne += numbers[i];
        console.log(resultOne);
    }
}
console.log("ini resultOne", resultOne);

const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = 0
for (let i = 0; i < numbersTwo.length; i++) {
    if (numbersTwo[i] % 2 > 0) {
        resultTwo += numbersTwo[i];
        console.log(resultTwo);
    }
}
console.log("ini resultTwo", resultTwo);

// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"];
let resultThree = [];
for (let i = 0; i < students.length; i++) {
    resultThree.push(students[i].toUpperCase());
}
console.log("ini resultThree", resultThree);

// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];
for (let i = 0; i < people.length; i++) {
    if (people[i].age > 18 && people[i].name.length > 5) {
        console.log("ini resultFour", people[i].name);
    }
}

// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];
let sum = 0;
for (let i = 0; i < items.length; i++) {
    sum = sum + items[i].price;
}
console.log("ini resultFive ", sum);


//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];
let resultSix = [];
for (let i = 0; i < numbersThree.length; i++) {
    if (resultSix.includes(numbersThree[i]) === false) {
        resultSix.push(numbersThree[i]);
    }
}
console.log("ini resultSix", resultSix);

// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];
let resultSeven = 0;
for (let i = 0; i < products.length; i++) {
    if (products[i].price > resultSeven) {
        resultSeven = products[i].price;
    }
}
console.log("ini resultSeven", resultSeven);


// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
let resultEight = "";
for (let i = 0; i < words.length; i++) {
    resultEight = resultEight + " " + words[i];
}
console.log("ini resultEight", resultEight);

// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
let resultNine = [];
for (let i = 0; i < names.length; i++) {
    if (names[i].includes("a")) {
        resultNine.push(names[i]);
    }
}
console.log("ini resultNine", resultNine);

// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
let resultTen = 0;
for (let i = 0; i < namesTwo.length; i++) {
    resultTen = resultTen + namesTwo[i].length;
}
console.log("ini resultTen", resultTen);

// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
let resultEleven = [];
for (let i = 0; i < peopleTwo.length; i++) {
    if (peopleTwo[i].age > 21) {
        resultEleven.push(peopleTwo[i].name + " (" + peopleTwo[i].age + ")");
    }
}
console.log("ini resultEleven", resultEleven);