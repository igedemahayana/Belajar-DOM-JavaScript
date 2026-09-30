let container = document.getElementById("#container");
let judul = document.querySelector(".judul");
let allItem = document.querySelectorAll(".item");
let noClass = document.querySelector(".tidak-ada-class");

/*
Latihan 2 — Loop dan Ubah
Dari HTML yang sama, gunakan querySelectorAll('.item') 
lalu forEach untuk mengubah textContent setiap item jadi huruf besar semua (gunakan .toUpperCase() 
di JavaScript string). Hasil akhirnya harusnya "APEL", "ROTI", "SUSU".
*/

allItem.forEach(function (el) {
  el.textContent = el.textContent.toUpperCase();
});

// Latihan 3 — Debugging (penting!)
console.log(noClass); // null

/*
TANTANGAN:
Cari tahu (boleh googling): apa itu NodeList dan apa bedanya sama Array biasa di JavaScript? 
(Petunjuk: coba Array.isArray(document.querySelectorAll('p')) di console, lihat hasilnya)
*/
Array.isArray(allItem);
console.log(allItem); // NodeList(3) [li.item, li.item, li.item]
