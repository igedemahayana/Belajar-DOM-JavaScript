let student1 = document.querySelector("#student1");
let student2 = document.querySelector("#student2");
let kotak = document.querySelector("#kotak");
let sapaan = document.querySelector("#sapaan");
let btnUbahSapaan = document.querySelector("#btnUbah");
let teks = document.querySelector("#teks");
let buttonToggle = document.querySelector("#buttonToggle");
let cardAlert = document.querySelector("#cardAlert");
let buttonMessageAlert = document.querySelector("#buttonMessageAlert");

// mengubah text: textContent vs innerHTML
student1.textContent = "Mahayana seorang Public Speaker";
student2.innerHTML = "Arum seorang Digital Art";

// mengubah class: classList
kotak.classList.add("kotak"); // menambahkan class
kotak.classList.remove("message"); // menghapus class
kotak.classList.toggle("rectangle"); // kalau ada -> hapus, kalau tidak ada -> ditambah
console.log(kotak.classList.contains("main")); // mengecek true / false
console.log(kotak);

// mengubah style langsung
student1.style.fontSize = "20px";
student2.style.fontSize = "20px";

// latihan 1 - Update Teks
btnUbahSapaan.onclick = function () {
  sapaan.textContent = "Halo Arum Cantik";
};

// Latihan 2 - Toggle Class
buttonToggle.onclick = function () {
  teks.classList.toggle("aktif");
};

// Latihan 3 - Kartu Peringatan
buttonMessageAlert.onclick = function () {
  cardAlert.style.display = "block";
  cardAlert.textContent = "Ini Adalah Peringatan Woy";
};
